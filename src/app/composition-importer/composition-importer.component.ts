import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Composition } from '../composition';
import { CompositionService } from '../composition.service';

@Component({
  selector: 'app-composition-importer',
  templateUrl: './composition-importer.component.html',
  styleUrls: ['./composition-importer.component.css']
})

/**
 * @class CompositionImporterComponent
 * Component used to import composition to a specific place
 */
export class CompositionImporterComponent implements OnInit {

  /** Composition list */
  public compositions: Composition[] = null;

  /** Event triggered on select */
  @Output() public select: EventEmitter<Composition> = new EventEmitter();

  /**
   * Setup the composition by retrieving all the data from firebase
   */
  private setupComposition(): void {
    this.compositionService
        .getCompositions()
        .subscribe(r => {
          this.compositions = r.map(v => v.payload.val());
        });
  }

  /**
   * Emit an event when a composition is selected
   * @param composition The selected composition
   */
  private onSelect(composition: Composition): void {
    this.select.emit(composition);
  }

  /**
   * @constructor
   * @param compositionService The service used to retrieve the compositions
   */
  constructor(private compositionService: CompositionService) { }

  ngOnInit() {
    this.setupComposition();
  }

}
