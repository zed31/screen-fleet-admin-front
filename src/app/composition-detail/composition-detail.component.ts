import { Component, OnInit } from '@angular/core';
import { CompositionService } from '../composition.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Composition } from '../composition';
import { CompositionData } from '../composition-data';
import { CompositionSerializerService } from '../composition-serializer.service';

@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})
export class CompositionDetailComponent implements OnInit {

  composition: Composition = null;
  compositionData: CompositionData;
  htmlInnerData = '';
  htmlData = '';

  constructor(
    private compositionService: CompositionService,
    private compositionSerializer: CompositionSerializerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  displayhello(): void {
    console.log("Hello");
  }

  getComposition(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.compositionService
        .getComposition(id)
        .subscribe(c => {
          this.composition = c;
          this.compositionData = this.compositionSerializer.generateCompositionData(this.composition.HtmlContent);
          this.htmlInnerData = this.compositionData.getData();
          console.log(this.htmlInnerData);
        });
  }

  ngOnInit() {
    this.getComposition();
  }

}
