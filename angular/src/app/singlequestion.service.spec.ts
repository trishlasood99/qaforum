import { TestBed } from '@angular/core/testing';

import { SinglequestionService } from './singlequestion.service';

describe('SinglequestionService', () => {
  let service: SinglequestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglequestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
