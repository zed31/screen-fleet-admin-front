import { Injectable } from '@angular/core';
import { COMPOSITIONS } from './mock-composition';
import { Composition } from './composition';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DBInterface } from './dbif';

@Injectable()
export class CompositionService {

  getCompositions(): Observable<Composition[]> {
    return of(COMPOSITIONS);
  }

  getComposition(id: string): Observable<Composition> {
    const composition = COMPOSITIONS.find(c => c.RawId === id);
    return of(composition);
  }

  removeComposition(composition: DBInterface): Observable<DBInterface> {
    return of(composition);
  }

  constructor() { }

}
