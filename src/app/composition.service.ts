import { Injectable } from '@angular/core';
import { COMPOSITIONS } from './mock-composition';
import { Composition } from './composition';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CompositionService {

  getCompositions(): Observable<Composition[]> {
    return of(COMPOSITIONS);
  }

  constructor() { }

}
