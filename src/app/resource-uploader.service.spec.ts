import { TestBed, inject } from '@angular/core/testing';

import { ResourceUploaderService } from './resource-uploader.service';

describe('ResourceUploaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceUploaderService]
    });
  });

  it('should be created', inject([ResourceUploaderService], (service: ResourceUploaderService) => {
    expect(service).toBeTruthy();
  }));
});
