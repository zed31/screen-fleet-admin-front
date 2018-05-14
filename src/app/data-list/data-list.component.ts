import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DBInterface } from '../dbif';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})

/**
 * The Component used to hold the list of data
 * @class DataListComponent
 */
export class DataListComponent implements OnInit {

  /** An array of list of data */
  @Input() dataList: DBInterface[] = null;

  /** The detail of the data */
  @Input() detailBadge = '#';

  /** The callback used upon remove */
  @Output() remove: EventEmitter<DBInterface> = new EventEmitter();

  /** The selected data */
  selectedData: DBInterface = null;

  /**
   * Construct the DataListComponent
   * @constructor
   */
  constructor() { }

  /**
   * Used to select the data
   * @param data The selected data
   */
  onSelect(data: DBInterface): void {
    this.selectedData = data;
  }

  /**
   * Callback used when the user wants to remove the data
   * @param data The removed data
   */
  onRemove(data: DBInterface): void {
    this.remove.emit(data);
  }

  /**
   * Angular lifecycle
   */
  ngOnInit() {
  }

}
