import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AngularFireDatabase } from 'angularfire2/database';

import { Resource } from './resource';

/**
 * Class used to handle the communication with the resources
 * @class ResourceService
 */
@Injectable()
export class ResourceService {

  /**
   * @returns An observable to an array of resources
   */
  getResources(): Observable<any[]> {
    return this.afdb.list('/resources').valueChanges();
  }

  /**
   * Add a resource to the array of resource
   * @param resource The resource added to the array of resource
   * @returns An observable to the specific resource
   */
  addResource(resource: Resource): Observable<Resource> {
    return of(resource);
  }

  /**
   * Remove a specific resource from the array
   * @param resource The resource being removed from the array
   * @returns an observable to a specific resource
   */
  removeResource(resource: Resource): Observable<Resource> {
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
  constructor(private afdb: AngularFireDatabase) { }

}
