import { Component, OnInit } from '@angular/core';
import { CompositionService } from '../composition.service';
import { Composition } from '../composition';
import { DBInterface } from '../dbif';

@Component({
  selector: 'app-compositions',
  templateUrl: './compositions.component.html',
  styleUrls: ['./compositions.component.css']
})

/**
 * @class CompositionsComponent
 * Class used to handle the composition component
 */
export class CompositionsComponent implements OnInit {

  /** list of composition */
  compositions: Composition[] = null;

  /** The detail composition */
  compositionDetail = 'composition';

  /**
   * @constructor
   * @param compositionService The service to handle the composition
   */
  constructor(private compositionService: CompositionService) { }

  /**
   * Get all the compositions
   */
  public getCompositions(): void {
    this.compositionService
        .getCompositions()
        .subscribe(comps => this.compositions = comps);
  }

  /**
   * Remove a specific composition
   * @param data The data being removed
   */
  public onRemove(data: DBInterface): void {
    this.compositionService
        .removeComposition(data as Composition)
        .subscribe(_ => this.compositions = this.compositions.filter(d => d.RawId !== data.RawId));
  }

  ngOnInit() {
    this.getCompositions();
  }

}
