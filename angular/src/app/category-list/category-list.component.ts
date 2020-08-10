import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import {CategoryListService} from '../services/categorylist.service';
import {Category} from '../models/category.model';

@Component({
  selector: 'ques-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Output() wasSelectedCategory = new EventEmitter <Category> ();
  categories:Category[];
  newCategoryTitle="";
  newCategoryDescription="";
  formhidden=1;
  onCategorySelected(category_selected:Category){
    this.wasSelectedCategory.emit(category_selected);
    console.log(category_selected.name);
  }
  displayCreateForm()
  {
    this.formhidden=(this.formhidden==0)?1:0;
  }
  onSubmit(categoryTitle:string,categoryDescription:string)
  {
    //have to set unique value for id
    //var newCategory=new Category(categoryTitle,categoryDescription,1);
    this.categoryService.createCategory(categoryTitle,categoryDescription).subscribe(newcategory=>this.categories.push(newcategory));
    ;
  }
  constructor(private categoryService:CategoryListService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories():void{
    this.categoryService.getCategories().subscribe(categories=>this.categories=categories);
  }
}
