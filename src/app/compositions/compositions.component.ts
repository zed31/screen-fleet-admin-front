import { Component, OnInit } from '@angular/core';
import { CompositionService } from '../composition.service';
import { Composition } from '../composition';
import { DBInterface } from '../dbif';

@Component({
  selector: 'app-compositions',
  templateUrl: './compositions.component.html',
  styleUrls: ['./compositions.component.css']
})
export class CompositionsComponent implements OnInit {

  compositions: Composition[] = null;

  constructor(private compositionService: CompositionService) { }

  getCompositions(): void {
    this.compositionService
        .getCompositions()
        .subscribe(comps => this.compositions = comps);
  }

  onRemove(data: DBInterface): void {
    this.compositionService
        .removeComposition(data)
        .subscribe(_ => this.compositions = this.compositions.filter(d => d.RawId !== data.RawId));
  }

  ngOnInit() {
    this.getCompositions();
  }

}
