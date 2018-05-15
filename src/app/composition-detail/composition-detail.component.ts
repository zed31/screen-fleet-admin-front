import { Component, OnInit } from '@angular/core';
import { CompositionService } from '../composition.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Composition } from '../composition';
import { CompositionData } from '../composition-data';
import { CompositionSerializerService } from '../composition-serializer.service';
import { Resource, ResourceType } from '../resource';

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
  private elementSelected: HTMLElement = null;

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
   * Create a new frame and setup the URL
   * @param resource The resource used to retrieve the frame URL
   * @returns An IFrame HTMLElement
   */
  createFrame(resource: Resource): HTMLIFrameElement {
    const v = document.createElement('iframe');
    v.setAttribute('src', resource.Url);
    v.setAttribute('frameborder', '0');
    v.setAttribute('style', 'height: 100%; max-width: 100%; width: 100%');
    return v;
  }

  /**
   * Setup the video inside the selected HTMLElement
   * @param resource The resource of type image, video or stream
   */
  setupResource(resource: Resource): void {
    switch (resource.Type) {
      case ResourceType.Image: {
        this.elementSelected = this.compositionData.insertImageToElement(
          this.elementSelected,
          resource.Url
        );
        break;
      }
      case ResourceType.Stream: {
        this.compositionData.insertStreamVideo(
          this.elementSelected,
          resource.Url
        );
        break;
      }
      case ResourceType.Video: {
        this.elementSelected.innerHTML = '<video style="height: 100%; max-width: 100%; width: 100%" autoplay controls>' +
                                         '<source src="' + resource.Url +
                                         '" type="video/mp4"></video>';
        break;
      }
    }
  }

  /**
   * Select a specific html element
   * @param element The selected element
   */
  selectElement(element: HTMLElement): void {
    this.elementSelected = element;
  }

  /**
   * Append auto-generated HTML into the component's view
   */
  appendHtml(): void {
    const renderElement = document.getElementById(ID_FIRST_DIV);
    renderElement.appendChild(this.divCompositionDetail);
    const v = renderElement.querySelectorAll('div');

    const elements: Array<HTMLElement> = [].slice.call(v, 1);
    elements.forEach(element => {
      const e = element as HTMLElement;

      e.addEventListener('click', () => {
        this.selectElement(e);
      });
    });
  }

  /**
   * Set-up the detail of the composition
   */
  setupComposition(): void {
    const id = this.route.snapshot.paramMap.get(ROUTE_ID);
    this.compositionService
        .getComposition(id)
        .subscribe(c => {
          this.composition = c;
          this.compositionData = this.compositionSerializer.generateCompositionData(this.composition.HtmlContent);
          this.divCompositionDetail = this.compositionData.getData();
          this.appendHtml();
        });
  }

  /**
   * Init lifecycle of the angular component
   */
  ngOnInit() {
    this.setupComposition();
  }

}
