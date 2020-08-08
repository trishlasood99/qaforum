import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../question.model';
import {Category} from '../category.model';
import {QuestionListService} from '../questionlist.service';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import {SingleCategoryService} from '../singlecategory.service';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[]=[];
  catId:number;
  category:Category;
  newQuestionTitle="";
  newQuestionDescription="";
  formhidden=1;
  constructor(private questionService:QuestionListService, private route: ActivatedRoute) {
    //this.formhidden=1;

  }

  ngOnInit(): void {

    //this.route.queryParams.subscribe(params=>{this.catId=Number(params['id']);});
    this.getCategory();
    this.getQuestions();
  }

  getQuestions(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionService.getQuestions(id).subscribe(questions=>this.questions=questions);
    console.log("Fetched question");
  }
  //define getCategory using a service
  getCategory(): void{
    //console.log(this.catId);
    //console.log(id);
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    //this.categoryService.getCategory(id).subscribe(category=>this.category=category);
    //console.log("Done fetching..");
    //console.log(this.category.name);
    this.catId=id;
    this.questionService.getCategory(id).subscribe(category=>this.category=category);
    console.log("Fetched category");
  }
  displayCreateForm()
  {
    this.formhidden=(this.formhidden==0)?1:0;
  }
  onSubmit(questionTitle:string,questionDescription:string)
  {
    this.questionService.createQuestion(this.catId,questionTitle,questionDescription).subscribe(newQuestion=>this.questions.push(newQuestion));
  }

}
