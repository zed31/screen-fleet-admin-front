import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { TV } from '../tv';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {

  tvs: TV[] = null;
  selectedTV: TV = null;

  constructor(private tvService: TvService) { }

  getTvs(): void {
    this.tvService
        .getTVList()
        .subscribe(tvs => this.tvs = tvs);
  }

  onSelect(tv: TV): void {
    this.selectedTV = tv;
  }

  ngOnInit() {
    this.getTvs();
  }

}
