import { Component, OnInit, Input } from '@angular/core';
import { DBInterface } from '../dbif';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  @Input() dataList: DBInterface[] = null;

  selectedData: DBInterface = null;

  constructor() { }

  onSelect(data: DBInterface): void {
    this.selectedData = data;
  }

  ngOnInit() {
  }

}
