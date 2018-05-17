import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TvService } from '../tv.service';
import { TV } from '../tv';
import { Router } from '@angular/router';
import { defaultHtmlContent } from '../default-html-content';

@Component({
  selector: 'app-tv-generator',
  templateUrl: './tv-generator.component.html',
  styleUrls: ['./tv-generator.component.css']
})

/**
 * Component used to generate new TV
 * @class TvGeneratorComponent
 */
export class TvGeneratorComponent implements OnInit {

  /** Model used for the TV */
  private tvModel: TV = new TV(Math.random().toString(36).substring(2));

  /**
   * @constructor
   * @param tvService The service used to communicate with the db
   */
  constructor(private tvService: TvService, private router: Router) {
    this.tvModel.InsertionDate = new Date();
    this.tvModel.UpdateTime = new Date();
    this.tvModel.Composition = defaultHtmlContent;
  }

  /**
   * Submit an event
   */
  public onSubmit(): void {
    this.tvService.addTV(this.tvModel)
        .subscribe(() => this.router.navigate(['']));
  }

  ngOnInit() {
  }

}
