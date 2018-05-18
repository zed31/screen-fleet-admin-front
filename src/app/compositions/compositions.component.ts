import { Component, OnInit } from '@angular/core';
import { CompositionService } from '../composition.service';
import { Composition } from '../composition';
import { DBInterface, ModelWrapper } from '../dbif';

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
  public compositions: ModelWrapper[] = null;

  /** The detail composition */
  public compositionDetail = 'composition';

  /** The route to add composition */
  public compositionAddRoute = '/generate/composition';

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
        .subscribe(comps => {
          this.compositions = comps.map(
            c => new ModelWrapper(c.key, c.payload.val())
          );
        });
  }

  /**
   * Remove a specific composition
   * @param data The data being removed
   */
  public onRemove(data: ModelWrapper): void {
    this.compositionService
        .removeComposition(data.key, data.model as Composition)
        .subscribe(_ => this.compositions = this.compositions.filter(d => d.model.RawId !== data.model.RawId));
  }

  ngOnInit() {
    this.getCompositions();
  }

}
