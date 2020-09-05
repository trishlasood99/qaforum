import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Category} from '../models/category.model';
import {CategoryListService} from '../services/categorylist.service';
import {ReportService} from '../services/report.service';

@Component({
  selector: 'ques-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Output() selectedCategory = new EventEmitter<void> ();
  @Input() category:Category;  //@Input exposes category property of the controller for binding
  hideCategory=false;
  hideReportForm=true;
  newReportText="";
  constructor(private categoryService:CategoryListService,private reportService:ReportService) {

  }

  ngOnInit(): void {
  }
  onSelection(){
    this.selectedCategory.emit();
  }

  deleteCategory()
  {
    this.categoryService.deleteCategory(this.category.id).subscribe(()=>console.log("Category deleted"));
    this.hideCategory=true;
  }

  clickReport()
  {
    this.hideReportForm=false;
  }

  reportCategory(content:string)
  {
    this.reportService.createCategoryReport(this.category.id,content).subscribe(()=>console.log("Category reported"));
  }

}
