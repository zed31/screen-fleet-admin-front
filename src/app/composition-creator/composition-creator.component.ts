import { Component, OnInit } from '@angular/core';

import { CompositionService } from '../composition.service';
import { Router } from '@angular/router';
import { Composition } from '../composition';
import { defaultHtmlContent } from '../default-html-content';

@Component({
  selector: 'app-composition-creator',
  templateUrl: './composition-creator.component.html',
  styleUrls: ['./composition-creator.component.css']
})

/**
 * @class CompositionCreatorComponent
 * Class used to handle the creation of a component
 */
export class CompositionCreatorComponent implements OnInit {

  /** Id used as RawId inside the model */
  private id: string = Math.random().toString(36).substring(2);

  /** Default HTML content of the composition */
  private defaultHtmlContent = defaultHtmlContent;

  /** Template model */
  public compositionModel = new Composition(this.id);

  /**
   * @constructor
   * @param compositionService The service used to handle composition
   * @param router The service used to handle routes
   */
  constructor(private compositionService: CompositionService,
              private router: Router) {
    this.compositionModel.HtmlContent = this.defaultHtmlContent;
    this.compositionModel.assets = [];
  }

  /**
   * Create the composition
   */
  public onSubmit(): void {
    this.compositionService.addComposition(this.compositionModel)
        .subscribe(() => {
          this.router.navigate(['/composition/' + this.compositionModel.RawId]);
        });
  }

  ngOnInit() {
  }

}
