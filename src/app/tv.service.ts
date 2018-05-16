import { Injectable } from '@angular/core';
import { TVS } from './mock-tv';
import { TV } from './tv';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DBInterface } from './dbif';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TvService {

  /** Reference of the TV in firebase */
  private tvDbRef: AngularFireList<TV> = null;

  /** Id of the tv in firebase */
  private TV_ID = '/tvs';

  /**
   * @returns An observable to any element inside the dbref
   */
  getTVList(): Observable<any[]> {
    return this.tvDbRef.valueChanges();
  }

  /**
   * Add tv to the database
   * @param tv The tv object that is pushed to the database
   */
  addTV(tv: TV): Observable<TV> {
    this.tvDbRef.push(tv);
    return of(tv);
  }

  /**
   * Remove a tv from the database
   * @param tv The tv being removed
   */
  removeTV(tv: DBInterface): Observable<DBInterface> {
    return of(tv);
  }

  /**
   * @constructor
   * @param dbref The reference of Angular fire database
   */
  constructor(private dbref: AngularFireDatabase) {
    this.tvDbRef = this.dbref.list(this.TV_ID);
  }

}
