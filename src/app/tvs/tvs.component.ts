import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { TV } from '../tv';
import { DBInterface, ModelWrapper } from '../dbif';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})

/**
 * @class TvsComponent
 * Class used to handle tvs list
 */
export class TvsComponent implements OnInit {

  /** The tvs wrapped inside the firebase wrapper */
  tvs: ModelWrapper[] = null;

  /**
   * @constructor
   * @param tvService The service used to handle tv
   */
  constructor(private tvService: TvService) { }

  /**
   * Get the tv from the service
   */
  public getTvs(): void {
    this.tvService
        .getTVList()
        .subscribe(tvs => {
          this.tvs = tvs.map(tv => new ModelWrapper(tv.key, tv.payload.val()));
        });
  }

  /**
   * Remove a specific tv
   * @param data The data being removed
   */
  public onRemove(data: ModelWrapper): void {
    this.tvService
        .removeTV(data.key, data.model)
        .subscribe(_ => this.tvs = this.tvs.filter(t => t.model.RawId !== data.model.RawId));
  }

  ngOnInit() {
    this.getTvs();
  }

}
