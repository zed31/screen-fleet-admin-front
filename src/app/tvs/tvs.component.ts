import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { TV } from '../tv';
import { DBInterface } from '../dbif';

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

  add(tvName: string, ip: string): void {
    tvName = tvName.trim();
    ip = ip.trim();
    const tv: TV = {
      RawId: '#auto-gen-' + this.tvs.length,
      Name: tvName,
      InsertionDate: new Date(),
      UpdateTime: new Date(),
      Ip: ip,
      Composition: ''
    };

    this.tvService
        .addTV(tv)
        .subscribe(t => this.tvs.push(t));
  }

  onRemove(data: DBInterface): void {
    this.tvService
        .removeTV(data)
        .subscribe(_ => this.tvs = this.tvs.filter(t => t.RawId !== data.RawId));
  }

  onSelect(tv: TV): void {
    this.selectedTV = tv;
  }

  ngOnInit() {
    this.getTvs();
  }

}
