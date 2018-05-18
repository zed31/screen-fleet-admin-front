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

  /** Array of resources to display */
  public resourcesDisplay: Resource[] = null;

  /** Uri of the resource detail */
  public resourceDetail = 'resources';

  /** Route used to add resource */
  public resourceAddRoute = '/generate/resource';

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
          this.resourcesDisplay = this.resources.map(v => v.model as Resource);
        });
  }

  /**
   * Resource to remove
   * @param toRemove The model wrapper to remove
   */
  public onRemove(toRemove: Resource) {
    const toRemoveModel = this.resources.find(r => r.model.RawId === toRemove.RawId);
    if (!toRemoveModel) {
      return ;
    }
    this.resourceService
        .removeResource(toRemoveModel.key, toRemove);
  }

  /**
   * Lifecycle of angular
   */
  public ngOnInit() {
    this.setupResources();
  }

}
