import { Component, OnInit, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ResourceUploaderService } from '../resource-uploader.service';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';
import {
  AngularFireUploadTask,
  AngularFireStorage,
  AngularFireStorageReference
} from 'angularfire2/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-generator',
  templateUrl: './resource-generator.component.html',
  styleUrls: ['./resource-generator.component.css']
})

/**
 * @class ResourceGeneratorComponent
 * Component used to generate new resource
 */
export class ResourceGeneratorComponent implements OnInit {

  /** Observable decorator for the upload progress */
  public uploadProgress: Observable<number> = null;

  /** Observable decorator for the download url link */
  public downloadURL: Observable<string> = null;

  /** Task used to control firebase upload */
  private task: AngularFireUploadTask = null;

  /** A reference to the current storage */
  private ref: AngularFireStorageReference = null;

  /**
   * @constructor
   * @param uploader The service used to upload resource
   * @param resourceService The service used to set a resource
   * @param router The router used to navigate through the different routes
   */
  constructor(private afstorage: AngularFireStorage,
              private resourceService: ResourceService,
              private router: Router) { }

  /**
   * Upload a file to the remote server storage
   * @param event The event triggered by the file detection
   */
  public upload(event): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afstorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();
    this.downloadURL
        .subscribe(() => this.downloadURL = this.ref.getDownloadURL());
  }

  /**
   * Upload all the resource to the firebase database
   * @param resourceFull The full content of the resource
   */
  public submitResource(resourceFull: Resource): void {
    this.resourceService.addResource(resourceFull)
        .subscribe(() => this.router.navigate(['']));
  }

  ngOnInit() {
  }

}
