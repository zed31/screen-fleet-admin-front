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
  public getTVList(): Observable<any[]> {
    return this.tvDbRef.snapshotChanges();
  }

  /**
   * Get a specific tv that matches the specific id
   * @param id The RawId of the tv
   * @returns an observable to the snapshots
   */
  public getSpecificTv(id: string): Observable<any[]> {
    return this.dbref
                .list(this.TV_ID, ref => ref.orderByChild('RawId').equalTo(id))
                .snapshotChanges();
  }

  /**
   * Add tv to the database
   * @param tv The tv object that is pushed to the database
   */
  public addTV(tv: TV): Observable<TV> {
    this.tvDbRef.push(tv);
    return of(tv);
  }

  /**
   * Remove a tv from the database
   * @param tv The tv being removed
   */
  public removeTV(key: string, tv: DBInterface): Observable<DBInterface> {
    this.dbref.object(this.TV_ID + '/' + key).remove();
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
