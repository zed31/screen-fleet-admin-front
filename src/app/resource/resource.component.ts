import { Component, OnInit } from '@angular/core';

import { ResourceService } from '../resource.service';
import { Resource } from '../resource';

/**
 * Class used to handle the Resource component
 * @class ResourceComponent
 */
@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  /** Array of resources */
  private resources: Resource[] = null;

  /**
   * Constructor of the Resource component
   * @constructor
   * @param resourceService The ResourceService that communicates with the back-end
   */
  constructor(private resourceService: ResourceService) { }

  /**
   * Setup the resources by getting them from the server
   */
  setupResources(): void {
    this.resourceService.getResources()
        .subscribe(rsrcs => this.resources = rsrcs);
  }

  /**
   * Lifecycle of angular
   */
  ngOnInit() {
    this.setupResources();
  }

}
