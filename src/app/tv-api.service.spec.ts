import { TestBed, inject } from '@angular/core/testing';

import { TvApiService } from './tv-api.service';

describe('TvApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvApiService]
    });
  });

  it('should be created', inject([TvApiService], (service: TvApiService) => {
    expect(service).toBeTruthy();
  }));
});
