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

  /** The download src of the firebase resource */
  public downloadSrc: string = null;

  /** The link of a stream */
  public streamLink: string = null;

  /** Task used to control firebase upload */
  private task: AngularFireUploadTask = null;

  /** A reference to the current storage */
  private ref: AngularFireStorageReference = null;

  /** The name of the resource */
  private resourceName: string = null;

  /** The type of the resource */
  private resourceType: string = null;

  /** Boolean to check if the user want to set a stream or classic file */
  private streamSelected = false;

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
        .subscribe(() => {
          this.ref.getDownloadURL()
              .subscribe(v => {
                this.downloadSrc = v;
                this.resourceName = event.target.files[0].name;
              });
        });
  }

  /**
   * Submit a link to create a stream resource
   */
  public submitLink(): void {
    this.downloadSrc = this.streamLink;
    this.resourceType = 'Stream';
    this.resourceName = Math.random().toString(36).substring(2);
  }

  /**
   * Upload all the resource to the firebase database
   * @param resourceFull The full content of the resource
   */
  public submitResource(resourceFull: Resource): void {
    this.resourceService.addResource(resourceFull)
        .subscribe(() => this.router.navigate(['']));
  }

  /**
   * Set the input as stream URL
   */
  public setInputAsStream(): void {
    this.streamSelected = true;
  }

  /**
   * Set the input as File URL
   */
  public setInputAsFile(): void {
    this.streamSelected = false;
  }

  ngOnInit() {
  }

}
