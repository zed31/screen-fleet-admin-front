import { Component, OnInit } from '@angular/core';
import { CompositionService } from '../composition.service';
import { Composition } from '../composition';

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

  ngOnInit() {
    this.getCompositions();
  }

}
