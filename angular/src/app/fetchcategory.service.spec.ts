import { TestBed } from '@angular/core/testing';

import { FetchcategoryService } from './fetchcategory.service';

describe('FetchcategoryService', () => {
  let service: FetchcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
