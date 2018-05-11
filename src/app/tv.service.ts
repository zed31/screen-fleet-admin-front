import { Injectable } from '@angular/core';
import { TVS } from './mock-tv';
import { TV } from './tv';

@Injectable()
export class TvService {

  getTVList(): TV[] { return TVS; }

  constructor() { }

}
