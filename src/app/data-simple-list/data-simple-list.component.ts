import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModelWrapper, DBInterface } from '../dbif';

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

  /** The list of data */
  @Input() dataList: ModelWrapper[] = null;

  /** Output used on remove */
  @Output() remove: EventEmitter<ModelWrapper> = new EventEmitter();

  /**
   * @constructor
   */
  constructor() { }

  /**
   * Call the remove event with the given data
   * @param data The data to remove
   */
  onRemove(data: ModelWrapper): void {
    this.remove.emit(data);
  }

  ngOnInit() {
  }

}
