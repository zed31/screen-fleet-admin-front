import { Injectable } from '@angular/core';
import { TVS } from './mock-tv';
import { TV } from './tv';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TvService {

  getTVList(): Observable<TV[]> { return of(TVS); }

  constructor() { }

}
