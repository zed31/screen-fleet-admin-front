import { Component, OnInit } from '@angular/core';
import { CompositionService } from '../composition.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Composition } from '../composition';
import { CompositionData } from '../composition-data';
import { CompositionSerializerService } from '../composition-serializer.service';
import { Resource } from '../resource';

const ID_FIRST_DIV = 'rendering';
const ROUTE_ID = 'id';

@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})

/**
 * A class used as angular component to handle the detail of a composition
 * @class CompositionDetailComponent
 */
export class CompositionDetailComponent implements OnInit {

  /** The current composition */
  composition: Composition = null;

  /** The composition details */
  private compositionData: CompositionData = null;

  /** The detail of a div composition */
  private divCompositionDetail: HTMLElement = null;

  /** The element selected */
  public elementSelected: HTMLElement = null;

  /** Bind for html element */
  private selectElementBinded = this.selectElement.bind(this);

  /** Key of the detailed composition */
  private key: string = null;

  /**
   * Create a CompositionDetailComponent
   * @constructor
   * @param compositionService the service of the composition
   * @param compositionSerializer the serializer of the composition
   * @param route The route information
   * @param location The location used to handle routes
   */
  constructor(
    private compositionService: CompositionService,
    private compositionSerializer: CompositionSerializerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  /**
   * Setup the video inside the selected HTMLElement
   * @param resource The resource of type image, video or stream
   */
  public setupResource(resource: Resource): void {
    if (!this.elementSelected) {
      return ;
    }

    switch (resource.Type) {
      case 'Image': {
        this.elementSelected = this.compositionData.insertImageToElement(
          this.elementSelected,
          resource.Url
        ) as HTMLElement;
        break;
      }
      case 'Stream': {
        this.elementSelected = this.compositionData.insertStreamVideo(
          this.elementSelected,
          resource.Url
        ) as HTMLElement;
        break;
      }
      case 'Video': {
        this.elementSelected = this.compositionData.insertVideoToElement(
          this.elementSelected,
          resource.Url
        ) as HTMLElement;
        break;
      }
    }
  }

  /**
   * Select a specific html element
   * @param element The selected element
   */
  private selectElement(event: MouseEvent): void {
    event.stopPropagation();
    this.elementSelected = event.srcElement as HTMLElement;
    if (this.elementSelected.id.includes('resource')) {
      this.elementSelected = this.elementSelected.parentElement as HTMLElement;
    }
  }

  /**
   * Split the element selected to an horizontal one
   */
  public splitHorizontal(): void {
    if (!this.elementSelected) {
      return ;
    }
    this.elementSelected = this.compositionData.splitHorizontal(this.elementSelected) as HTMLElement;
    const childs: Array<HTMLElement> = [].slice.call(this.elementSelected.children);

    this.elementSelected.removeEventListener('click', this.selectElementBinded);
    childs.forEach(element => {
      const e = element as HTMLElement;
      e.addEventListener('click', this.selectElementBinded);
    });
  }

  /**
   * Split the element selected to a vertical one
   */
  public splitVertical(): void {
    if (!this.elementSelected) {
      return ;
    }
    this.compositionData.splitVertical(this.elementSelected);
  }

  private isChild(): HTMLElement {
    const renderElement = document.getElementById(ID_FIRST_DIV) as HTMLElement;
    const v = renderElement.querySelectorAll('div') as NodeListOf<HTMLDivElement>;
    const elements: Array<HTMLElement> = [].slice.call(v);
    return elements.find(elem => elem.id === this.divCompositionDetail.id);
  }

  /**
   * Append auto-generated HTML into the component's view
   */
  private appendHtml(): void {
    const renderElement = document.getElementById(ID_FIRST_DIV) as HTMLElement;
    const currentDiv: HTMLElement = this.isChild();
    if (currentDiv !== undefined) {
      renderElement.removeChild(currentDiv);
    }
    renderElement.appendChild(this.divCompositionDetail);
    const v = renderElement.querySelectorAll('div') as NodeListOf<HTMLDivElement>;

    const elements: Array<HTMLElement> = [].slice.call(v);
    elements.forEach(element => {
      const e = element as HTMLElement;
      e.addEventListener('click', this.selectElementBinded);
    });
  }

  /**
   * Set-up the detail of the composition
   */
  private setupComposition(): void {
    const id = this.route.snapshot.paramMap.get(ROUTE_ID);
    this.compositionService
        .getComposition(id)
        .subscribe(c => {
          const tmpComp = c[0];
          this.key = tmpComp.key as string;
          this.composition = tmpComp.payload.val() as Composition;
          this.compositionData = this.compositionSerializer.generateCompositionData(this.composition.HtmlContent);
          this.divCompositionDetail = this.compositionData.getData();
          this.appendHtml();
        });
  }

  /**
   * Submit changes of the composition
   */
  public submitChanges(): void {
    this.composition.HtmlContent = this.compositionData.getCompositionAsString();
    this.compositionService
        .updateComposition(this.key, this.composition)
        .subscribe(val => {
          this.composition = val as Composition;
        });
  }

  /**
   * Init lifecycle of the angular component
   */
  ngOnInit() {
    this.setupComposition();
  }

}
