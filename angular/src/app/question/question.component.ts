import { Component, OnInit, Input} from '@angular/core';
import {Question} from '../models/question.model';
import {QuestionListService} from '../services/questionlist.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() ques:Question;
  hideQuestion=false;
  constructor(private questionService:QuestionListService) { }

  ngOnInit(): void {
  }

  deleteQuestion()
  {
    this.questionService.deleteQuestion(this.ques.category.id,this.ques.id).subscribe(()=>console.log("Question deleted"));
    this.hideQuestion=true;
  }


}
