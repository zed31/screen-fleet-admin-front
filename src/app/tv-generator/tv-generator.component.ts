import { Component, OnInit } from '@angular/core';

import { TvService } from '../tv.service';
import { TV } from '../tv';

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
  constructor(private tvService: TvService) { }

  ngOnInit() {
  }

}
