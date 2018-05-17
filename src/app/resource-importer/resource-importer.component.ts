import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ResourceService } from '../resource.service';
import { Resource } from '../resource';
import { Composition } from '../composition';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-resource-importer',
  templateUrl: './resource-importer.component.html',
  styleUrls: ['./resource-importer.component.css']
})

/**
 * Class used to control the component of Resource importer
 * @class ResourceImporterComponent
 */
export class ResourceImporterComponent implements OnInit {

  /** The callback called during the `onSelect` */
  @Output() public select: EventEmitter<Resource> = new EventEmitter();

  /** Array of resources */
  public resources: Resource[] = null;

  /**
   * Setup the resources by retrieving the resources from the service
   */
  setupResources(): void {
    this.resourceService.getResources()
        .subscribe(v => this.resources = v.map(snapshot => snapshot.payload.val()));
  }

  /**
   * Select the resource and then emit an event to the callee
   * @param resource The selected resource
   */
  onSelect(resource: Resource): void {
    this.select.emit(resource);
  }

  /**
   * Constructor of the ResourceImporter
   * @constructor
   * @param resourceService The service used to manipulate resources
   */
  constructor(private resourceService: ResourceService) { }

  /**
   * Lifecycle of angular
   */
  ngOnInit() {
    this.setupResources();
  }

}
