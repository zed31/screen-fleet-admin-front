import { Component, OnInit, Input, Output } from '@angular/core';
import { DBInterface } from '../dbif';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})

export class DataListComponent implements OnInit {

  @Input() dataList: DBInterface[] = null;

  @Output() remove: EventEmitter<DBInterface> = new EventEmitter();

  selectedData: DBInterface = null;

  constructor() { }

  onSelect(data: DBInterface): void {
    this.selectedData = data;
  }

  onRemove(data: DBInterface): void {
    this.remove.emit(data);
  }

  ngOnInit() {
  }

}
