import { Component, OnInit } from '@angular/core';

import { TvService } from '../tv.service';
import { CompositionService } from '../composition.service';

import { Composition } from '../composition';
import { TV } from '../tv';
import { ModelWrapper } from '../dbif';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
  public tv: ModelWrapper;

  /**
   * Get the detailed tv from the database
   */
  private setupTv(): void {
    const id = this.route.snapshot.paramMap.get(ROUTE_ID);
    this.tvService.getSpecificTv(id)
        .subscribe(snapshots => {
          const snapshot = snapshots[0];
          this.tv = new ModelWrapper(snapshot.key, snapshot.payload.val());
          const element = document.getElementById('comp-rendering') as HTMLElement;
          const tv = this.tv.model as TV;
          element.innerHTML = tv.Composition;
        });
  }

  /**
   * @constructor
   * @param tvService The service used to handle the Tvs
   * @param compositionService The service used to handle the composition
   * @param route the route information
   * @param location the location information
   */
  constructor(private tvService: TvService,
              private compositionService: CompositionService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.setupTv();
  }

}
