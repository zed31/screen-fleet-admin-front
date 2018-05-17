import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Resource } from '../resource';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})

/**
 * @class ResourceFormComponent
 * Class used to handle the resource form
 */
export class ResourceFormComponent implements OnInit {

  /** Download link of the resource url */
  @Input() private downloadLink: string;

  /** The resource name of the downloaded file */
  @Input() private resourceName: string;

  /** Event used to submit an output event to the caller */
  @Output() private submitEvent: EventEmitter<Resource> = new EventEmitter();

  /** Model type used to define the type of the resource */
  public typeModel: string[] = ['Image', 'Stream', 'Video'];

  /** Resource model to fill the form */
  public resourceModel: Resource = new Resource(Math.random().toString(36).substring(2));

  /**
   * @constructor
   */
  constructor() {
    this.resourceModel.UpdateTime = new Date();
    this.resourceModel.InsertionDate = new Date();
  }

  /**
   * Submit an event to the caller
   */
  public onSubmit(): void {
    this.submitEvent.emit(this.resourceModel);
  }

  /**
   * Angular lifecycle
   */
  ngOnInit() {
    this.resourceModel.Url = this.downloadLink;
    this.resourceModel.Name = this.resourceName;
  }

}
