import { TestBed } from '@angular/core/testing';

import { FetchCategoryService } from './fetch-category.service';

describe('FetchCategoryService', () => {
  let service: FetchCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
