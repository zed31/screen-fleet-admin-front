import { Injectable } from '@angular/core';
import { COMPOSITIONS } from './mock-composition';
import { Composition } from './composition';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()

/**
 * Class used as a service for the composition handling
 * @class CompositionService
 */
export class CompositionService {

  /** Reference to the resource folder */
  private compositionDbRef: AngularFireList<Composition> = null;

  /** Composition path for the database */
  private COMPOSITION_ID = '/compositions';

  /**
   * Get all the composition of the reference
   * @returns all the composition
   */
  public getCompositions(): Observable<any[]> {
    return this.compositionDbRef.valueChanges();
  }

  /**
   * Retrieve a child according to the RawId value
   * @param id The id of the child to retrieve
   * @returns an observable on the specific child
   */
  public getComposition(id: string): Observable<any[]> {
    return this.dbRef.list(
      this.COMPOSITION_ID,
      ref => ref.orderByChild('RawId').equalTo(id)
    ).snapshotChanges().map(value => {
      return value;
    });
  }

  /**
   * Update the composition
   * @param key The key of the child
   * @param composition the updated composition
   * @returns an observable to a composition
   */
  public updateComposition(key: string, composition: Composition): Observable<Composition> {
    this.compositionDbRef.update(key, composition);
    return of(composition);
  }

  /**
   * Remove a composition
   * @param composition The composition that needs to be removed
   * @returns an observable to the desired composition
   */
  public removeComposition(composition: Composition): Observable<Composition> {
    this.dbRef.list(
      this.COMPOSITION_ID,
      ref => ref.orderByChild('RawId').equalTo(composition.RawId)
    ).remove();
    return of(composition);
  }

  /**
   * @constructor
   * @param dbRef The reference of the angular fire
   */
  constructor(private dbRef: AngularFireDatabase) {
    this.compositionDbRef = this.dbRef.list(this.COMPOSITION_ID);
  }

}
