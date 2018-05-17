import { Component, OnInit } from '@angular/core';

import { TvService } from '../tv.service';
import { CompositionService } from '../composition.service';

import { Composition, Asset } from '../composition';
import { TV } from '../tv';
import { ScreenFleetTV } from '../screenfleet-tv';
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

  /**
   * Map the links with the desired file
   * @param assets The list of assets
   * @param link The link compared
   * @returns a string containing the name of the resource
   */
  private mapWithAsset(assets: Asset[], link: string): string {
    const prettyLink = link.replace(/&amp;/g, '&');
    const asset = assets.find((r: Asset) => r.link === prettyLink);
    return asset ? asset.name : undefined;
  }

  /**
   * Format html content
   * @param assets The asset list
   * @param html The html string content
   * @returns a string containing html
   */
  private formatHtml(assets: Asset[], html: string): string {
    let v = (' ' + html).slice(1);
    const r = /src=\"([^\"])+.\"/g;
    const matchList = v.match(r);
    matchList.forEach(element => {
      if (assets) {
        const url = element.match(/http[s]\:\/\/([^"])+/)[0];
        const asset = this.mapWithAsset(assets, url);
        if (asset) {
          v = v.replace(element, 'src="../resource/' + asset + '"');
        }
      }
    });
    return v;
  }

  /**
   * Submit changes to firebase
   */
  private submitChanges(): void {
    this.tvService.updateTv(this.key, this.tv)
        .subscribe(t => {
          const screenFleetTv = new ScreenFleetTV(t.Name, t.Ip, t.Composition, t.Assets);
          screenFleetTv.html = this.formatHtml(screenFleetTv.assets, screenFleetTv.html);
          if (!screenFleetTv.assets) {
            screenFleetTv.assets = [];
          }
          this.tvApiService.putNewTv(screenFleetTv)
              .subscribe(_ => this.tv = t);
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
