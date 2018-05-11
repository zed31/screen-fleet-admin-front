import { Component, OnInit } from '@angular/core';
import { CompositionService } from '../composition.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Composition } from '../composition';
import { CompositionSerializerService } from '../composition-serializer.service';

@Component({
  selector: 'app-composition-detail',
  templateUrl: './composition-detail.component.html',
  styleUrls: ['./composition-detail.component.css']
})
export class CompositionDetailComponent implements OnInit {

  composition: Composition = null;
  htmlInnerData = '';
  htmlData = '';

  constructor(
    private compositionService: CompositionService,
    private compositionSerializer: CompositionSerializerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getComposition(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.compositionService
        .getComposition(id)
        .subscribe(c => {
          this.composition = c;
          this.htmlData = this.composition.HtmlContent;
          this.compositionSerializer.generateCompositionData(this.htmlData);
        });
  }

  ngOnInit() {
    this.getComposition();
  }

}
