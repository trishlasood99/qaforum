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
export class ReportService {

  constructor(private http:HttpClient) { }

  getReports():Observable<any>
  {
    return this.http.get("http://localhost:5000/admin/reports");
  }

  deleteReport(reportId:number)
  {
    return this.http.delete('http://localhost:5000/admin/reports/'+reportId);
  }

  createCategoryReport(categoryId:number,content:string)
  {
    return this.http.post('http://localhost:5000/admin/reports/',{content:content, category_id: categoryId},httpOptions);
  }

  createQuestionReport(categoryId:number,questionId:number,content:string)
  {
      return this.http.post('http://localhost:5000/admin/reports/',{content:content, category_id: categoryId, question_id:questionId},httpOptions);
  }

  createAnswerReport(categoryId:number,questionId:number,answerId:number,content:string)
  {
      return this.http.post('http://localhost:5000/admin/reports/',{content:content, category_id: categoryId, question_id:questionId, answer_id:answerId},httpOptions);
  }

}
