import { TestBed, inject } from '@angular/core/testing';

import { CompositionSerializerService } from './composition-serializer.service';

describe('CompositionSerializerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompositionSerializerService]
    });
  });

  it('should be created', inject([CompositionSerializerService], (service: CompositionSerializerService) => {
    expect(service).toBeTruthy();
  }));
});
