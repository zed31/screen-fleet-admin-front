import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModelWrapper, DBInterface } from '../dbif';
import { Resource } from '../resource';

@Component({
  selector: 'app-data-simple-list',
  templateUrl: './data-simple-list.component.html',
  styleUrls: ['./data-simple-list.component.css']
})

/**
 * @class DataSimpleListComponent
 * Class used to handle the DataSimpleList component
 */
export class DataSimpleListComponent implements OnInit {

  /** Output used on remove */
  @Output() remove: EventEmitter<Resource> = new EventEmitter();

  /** List of resource */
  @Input() private resources: Resource[] = null;

  /**
   * @constructor
   */
  constructor() { }

  /**
   * Check if the resource is an image or other type
   * @param resource The resource to check
   * @returns true if the resource is an image, false otherwise
   */
  public isImage(resource: Resource): boolean {
    return resource.Type === 'Image';
  }

  /**
   * Call the remove event with the given data
   * @param data The data to remove
   */
  onRemove(data: Resource): void {
    this.remove.emit(data);
  }

  ngOnInit() {
  }

}
