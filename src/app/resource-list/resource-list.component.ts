import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Resource } from '../resource';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})

/**
 * Class used to maintain the list of resources
 * @class ResourceListComponent
 */
export class ResourceListComponent implements OnInit {

  /** Resource Input list passed as parameter */
  @Input() resources: Resource[] = null;

  /** Select event callback */
  @Output() select: EventEmitter<Resource> = new EventEmitter();

  /**
   * Constructor of the ResourceListComponent class
   * @constructor
   */
  constructor() { }

  /**
   * Select the resource and emit an event
   * @param resource The selected resource
   */
  onSelect(resource: Resource): void {
    this.select.emit(resource);
  }

  /**
   * Angular lifecycle
   */
  ngOnInit() {
  }

}
