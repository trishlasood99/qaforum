import { Injectable } from '@angular/core';
import {Category} from '../models/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from 'rxjs'; //since fetching from a remote server will be an asynchronous task

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(private http:HttpClient) { }
  getCategories():Observable<any>{
    return this.http.get('http://localhost:5000/categories');
  }

  createCategory(title:string,description:string):Observable<any>{
    return this.http.post('http://localhost:5000/categories',{
      name:title,
      description:description
    },httpOptions);
  }

}
