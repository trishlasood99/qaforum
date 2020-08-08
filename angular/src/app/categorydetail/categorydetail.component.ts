import { Component, OnInit, Input } from '@angular/core';
import {Category} from '../category.model';

@Component({
  selector: 'category-detail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css']
})
export class CategorydetailComponent implements OnInit {
  @Input() categoryDisplayed:Category;

  constructor() { }

  ngOnInit(): void {
  }

}
