import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Resource } from './resource';

@Injectable()

/**
 * Class used to handle the communication with the resources
 * @class ResourceService
 */
export class ResourceService {

  /** Reference of the resource */
  private resourceDbRef: AngularFireList<Resource> = null;

  /** Reference to the url for the resources */
  private RESSOURCE_ID = '/resources';

  /**
   * @returns An observable to an array of resources
   */
  getResources(): Observable<any[]> {
    return this.resourceDbRef.snapshotChanges();
  }

  /**
   * Add a resource to the array of resource
   * @param resource The resource added to the array of resource
   * @returns An observable to the specific resource
   */
  addResource(resource: Resource): Observable<Resource> {
    this.resourceDbRef.push(resource);
    return of(resource);
  }

  /**
   * Remove a specific resource from the array
   * @param key The key of the removed resource
   * @param resource The resource being removed from the array
   * @returns an observable to a specific resource
   */
  removeResource(key: string, resource: Resource): Observable<Resource> {
    this.afdb.object(this.RESSOURCE_ID + '/' + key).remove();
    return of(resource);
  }

  /**
   * Update a specific resource
   * @param resource The resource being updated
   * @returns an observable to a specific resource
   */
  updateResource(resource: Resource): Observable<Resource> {
    return of(resource);
  }

  /**
   * @constructor
   * @param afdb The AngularFireDatabase module
   */
  constructor(private afdb: AngularFireDatabase) {
    this.resourceDbRef = afdb.list(this.RESSOURCE_ID);
  }

}
