import { Injectable } from '@angular/core';
import {Category} from './category.model';
import {CATEGORIES} from './categories';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleCategoryService {

  constructor() { }
  getCategory(id):Observable<Category>{
    console.log("Fetching  category.. ")
    return of(CATEGORIES[id-1]);
  }
}
