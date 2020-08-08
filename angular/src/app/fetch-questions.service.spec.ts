import { TestBed } from '@angular/core/testing';

import { FetchQuestionsService } from './fetch-questions.service';

describe('FetchQuestionsService', () => {
  let service: FetchQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
