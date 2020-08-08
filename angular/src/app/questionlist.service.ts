import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Question} from './question.model';
import {Observable, of} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionListService {
  questionList:Question[]=[];
  constructor(private http:HttpClient) { }

  getQuestions(id:number):Observable<any>{
    return this.http.get('http://localhost:5000/categories/'+id+'/questions');
  }

  createQuestion(categoryId:number,title:string,description:string):Observable<any>
  {
    return this.http.post('http://localhost:5000/categories/'+categoryId+'/questions',{
      title:title,
      description:description
    },httpOptions);
  }

  getCategory(id:number):Observable<any>{
    return this.http.get('http://localhost:5000/categories/'+id);
  }
}
