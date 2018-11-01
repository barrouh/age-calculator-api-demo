import { TestBed } from '@angular/core/testing';

import { GetAgeService } from './get-age.service';

describe('GetAgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAgeService = TestBed.get(GetAgeService);
    expect(service).toBeTruthy();
  });
});
