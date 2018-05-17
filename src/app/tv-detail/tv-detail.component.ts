import { Component, OnInit } from '@angular/core';

import { TvService } from '../tv.service';
import { CompositionService } from '../composition.service';

import { Composition } from '../composition';
import { TV } from '../tv';
import { ModelWrapper } from '../dbif';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TvApiService } from '../tv-api.service';

const ROUTE_ID = 'id';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.css']
})


/**
 * @class TvDetailComponent
 * Class used to handle the detail of a tv
 */
export class TvDetailComponent implements OnInit {

  /** The detailed tv */
  public tv: TV;

  private key: string;

  private loadHtmlContent(htmlContent: string) {
    const element = document.getElementById('comp-rendering') as HTMLElement;
    element.innerHTML = htmlContent;
  }

  /**
   * Get the detailed tv from the database
   */
  private setupTv(): void {
    const id = this.route.snapshot.paramMap.get(ROUTE_ID);
    this.tvService.getSpecificTv(id)
        .subscribe(snapshots => {
          const snapshot = snapshots[0];
          this.tv = snapshot.payload.val() as TV;
          this.key = snapshot.key as string;
          this.loadHtmlContent(this.tv.Composition);
        });
  }

  /**
   * Select a composition to change the HTML content of the TV
   * @param composition The selected composition
   */
  private onSelect(composition: Composition): void {
    this.tv.Composition = composition.HtmlContent;
    this.tv.Assets = composition.assets;
    if (!this.tv.Assets) {
      this.tv.Assets = [];
    }
    this.loadHtmlContent(this.tv.Composition);
  }

  private submitChanges(): void {
    this.tvService.updateTv(this.key, this.tv)
        .subscribe(t => {
          this.tv = t;
          this.tvApiService.postNewTv(this.tv).subscribe(_ => console.log('done'));
        });
  }

  /**
   * @constructor
   * @param tvService The service used to handle the Tvs
   * @param compositionService The service used to handle the composition
   * @param tvApiService The Service used to handle screen fleet api
   * @param route the route information
   * @param location the location information
   */
  constructor(private tvService: TvService,
              private compositionService: CompositionService,
              private tvApiService: TvApiService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.setupTv();
  }

}
