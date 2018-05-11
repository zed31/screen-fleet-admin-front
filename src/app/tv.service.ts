import { Injectable } from '@angular/core';
import { TVS } from './mock-tv';
import { TV } from './tv';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DBInterface } from './dbif';

@Injectable()
export class TvService {

  getTVList(): Observable<TV[]> { return of(TVS); }

  addTV(tv: TV): Observable<TV> {
    return of(tv);
  }

  removeTV(tv: DBInterface): Observable<DBInterface> {
    return of(tv);
  }

  constructor() { }

}
