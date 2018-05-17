import { Component, OnInit } from '@angular/core';

import { ModelWrapper } from '../dbif';
import { ResourceService } from '../resource.service';
import { Resource } from '../resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})

/**
 * Class used to handle the Resource component
 * @class ResourceComponent
 */
export class ResourceComponent implements OnInit {

  /** Array of resources */
  public resources: ModelWrapper[] = null;

  /** Uri of the resource detail */
  public resourceDetail = 'resources';

  /**
   * Constructor of the Resource component
   * @constructor
   * @param resourceService The ResourceService that communicates with the back-end
   */
  constructor(private resourceService: ResourceService) { }

  /**
   * Setup the resources by getting them from the server
   */
  public setupResources(): void {
    this.resourceService.getResources()
        .subscribe(rsrcs => {
          this.resources = rsrcs.map(r => new ModelWrapper(r.key, r.payload.val()));
        });
  }

  /**
   * Resource to remove
   * @param toRemove The model wrapper to remove
   */
  public onRemove(toRemove: ModelWrapper) {
    this.resourceService
        .removeResource(toRemove.key, toRemove.model as Resource);
  }

  /**
   * Lifecycle of angular
   */
  public ngOnInit() {
    this.setupResources();
  }

}
