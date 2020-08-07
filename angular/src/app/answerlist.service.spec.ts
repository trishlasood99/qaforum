import { TestBed } from '@angular/core/testing';

import { AnswerlistService } from './answerlist.service';

describe('AnswerlistService', () => {
  let service: AnswerlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
