import { Component, OnInit } from '@angular/core';
import { CompositionService } from '../composition.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Composition } from '../composition';
import { CompositionData } from '../composition-data';
import { CompositionSerializerService } from '../composition-serializer.service';

const ID_FIRST_DIV = 'rendering';
const ROUTE_ID = 'id';

@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})
export class CompositionDetailComponent implements OnInit {

  private composition: Composition = null;
  private compositionData: CompositionData = null;
  private htmlInnerData = '';
  private htmlData = '';
  private divFirstConfig: HTMLElement = null;

  constructor(
    private compositionService: CompositionService,
    private compositionSerializer: CompositionSerializerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  displayhello(): void {
    console.log('Hello');
  }

  appendHtml(): void {
    document.getElementById(ID_FIRST_DIV).appendChild(this.divFirstConfig);
    const v = document.getElementById(ID_FIRST_DIV)
                      .querySelectorAll('div');
    const elements: Array<HTMLElement> = [].slice.call(v, 1);
    elements.forEach(element => {
      const e = element as HTMLElement;
      e.addEventListener('click', () => {
        this.displayhello();
      });
      console.log(element.id);
    });
  }

  getComposition(): void {
    const id = this.route.snapshot.paramMap.get(ROUTE_ID);
    this.compositionService
        .getComposition(id)
        .subscribe(c => {
          this.composition = c;
          this.compositionData = this.compositionSerializer.generateCompositionData(this.composition.HtmlContent);
          this.divFirstConfig = this.compositionData.getData();
          this.appendHtml();
        });
  }

  ngOnInit() {
    this.getComposition();
  }

}
