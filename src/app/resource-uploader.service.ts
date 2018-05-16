import { Injectable } from '@angular/core';

import { Resource } from './resource';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable()

/**
 * @class ResourceUploaderService
 * Class used to handle the upload of a resource inside
 * remote server
 */
export class ResourceUploaderService {

  /**
   * Upload the file into the storage device
   * @param file The file being uploaded
   */
  public upload(file: File): AngularFireUploadTask {
    const id = Math.random().toString(36).substring(2);
    const ref = this.afstorage.ref(id);
    return ref;
  }

  /**
   * @constructor
   * Initialize the service
   * @param afstorage The storage api
   */
  constructor(private afstorage: AngularFireStorage) { }

}
