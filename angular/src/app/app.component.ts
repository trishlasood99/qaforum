import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Category} from './category.model';
import {CATEGORIES} from './categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QA Forum';

  //@Output() categoryWasSelected = new EventEmitter<Category>()
  //onClickDetail(category:Category)
  //{
    //this.loadedCategory=category;
  //}
}
