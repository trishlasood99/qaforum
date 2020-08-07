import { Injectable } from '@angular/core';
import {QUESTIONS} from './questions';
import {Question} from './question.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleQuestionService {
  question:Question;
  constructor() { }
  getQuestion(id:number):Observable<Question>{
    console.log("Getting question ",id);
    for (let x of QUESTIONS)
    {
      if(x.id==id)
      {
        this.question=x;
        break;
      }
    }
    return of(this.question);
  }
}
