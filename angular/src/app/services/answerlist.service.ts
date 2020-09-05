import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Answer} from '../models/answer.model';
import {Observable, of} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AnswerListService {
  answerList:Answer[]=[];
  constructor(private http:HttpClient) { }

  getQuestion(questionId:number,categoryId:number):Observable<any>{
    return this.http.get('http://localhost:5000/categories/'+categoryId+'/questions/'+questionId);
  }

  getAnswers(questionId:number,categoryId:number):Observable<any>{

    return this.http.get('http://localhost:5000/categories/'+categoryId+'/questions/'+questionId+'/answers');
  }
  createAnswer(questionId:number,categoryId:number,content:string):Observable<any>{
    return this.http.post('http://localhost:5000/categories/'+categoryId+'/questions/'+questionId+'/answers',{
      content:content
    },httpOptions);
  }

  createUpvote(answerId:number,questionId:number,categoryId:number)
  {
    return this.http.post('http://localhost:5000/categories/'+categoryId+'/questions/'+questionId+'/answers/'+answerId+'/upvote',{
      answerId:answerId
    },httpOptions);
  }

  removeUpvote(answerId:number,questionId:number,categoryId:number)
  {
    return this.http.delete('http://localhost:5000/categories/'+categoryId+'/questions/'+questionId+'/answers/'+answerId+'/upvote');
  }

  deleteAnswer(answerId:number,questionId:number,categoryId:number)
  {
      return this.http.delete('http://localhost:5000/categories/'+categoryId+'/questions/'+questionId+'/answers/'+answerId);
  }

  getAnswerContent(answerId:number,questionId:number,categoryId:number)
  {
      return this.http.get('http://localhost:5000/categories/'+categoryId+'/questions/'+questionId+'/answers/'+answerId+'/getcontent');
  }
}
