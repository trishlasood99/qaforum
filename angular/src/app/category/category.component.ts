import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';

import {Category} from '../models/category.model'

@Component({
  selector: 'ques-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Output() selectedCategory = new EventEmitter<void> ();
  @Input() category:Category;  //@Input exposes category property of the controller for binding

  constructor() {

  }

  ngOnInit(): void {
  }
  onSelection(){
    this.selectedCategory.emit();
  }

}
