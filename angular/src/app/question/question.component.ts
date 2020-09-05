import { Component, OnInit, Input} from '@angular/core';
import {Question} from '../models/question.model';
import {QuestionListService} from '../services/questionlist.service';
import {ReportService} from '../services/report.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() ques:Question;
  hideQuestion=false;
  hideReportForm=true;
  newReportText="";
  constructor(private questionService: QuestionListService,private reportService: ReportService) { }

  ngOnInit(): void {
  }

  deleteQuestion()
  {
    this.questionService.deleteQuestion(this.ques.category.id,this.ques.id).subscribe(()=>console.log("Question deleted"));
    this.hideQuestion=true;
  }

  clickReport()
  {
    this.hideReportForm=false;
  }

  reportQuestion(content:string)
  {
    this.reportService.createQuestionReport(this.ques.category.id,this.ques.id,content).subscribe(()=>console.log("Reported question"));
  }

}
