import { Component, OnInit, Input } from '@angular/core';
import {Report} from '../models/report.model';
import {Question} from '../models/question.model';
import {Answer} from '../models/answer.model';
import {Category} from '../models/category.model';
import {ReportService} from '../services/report.service';
import {AnswerListService} from '../services/answerlist.service';
import {QuestionListService} from '../services/questionlist.service';
import {CategoryListService} from '../services/categorylist.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() report: Report;
  questionReported: Question;
  ansContent: string;
  categoryReported: Category;
  hideReport = false;

  constructor(private reportService: ReportService, private answerService: AnswerListService, private questionService:QuestionListService, private categoryService:CategoryListService) { }

  ngOnInit(): void {
  }

  deleteReport()
  {
    this.reportService.deleteReport(this.report.id).subscribe(()=>console.log("Deleted Report"));
    this.hideReport = true;
  }

  deleteAnswer()
  {
    this.answerService.deleteAnswer(this.report.answer_id,this.report.question_id,this.report.category_id).subscribe(()=>console.log("Deleted answer"));
    this.deleteReport();
  }

  deleteQuestion()
  {
    this.questionService.deleteQuestion(this.report.category_id,this.report.question_id).subscribe(()=>console.log("Deleted question"));
    this.deleteReport();
  }

  deleteCategory()
  {
    this.categoryService.deleteCategory(this.report.category_id).subscribe(()=>console.log("Deleted category"));
    this.deleteReport();
  }

  viewAnswer()
  {
      this.answerService.getAnswerContent(this.report.answer_id,this.report.question_id,this.report.category_id).subscribe(answerContent=>this.ansContent = String(answerContent));
  }

  viewQuestion()
  {
    this.answerService.getQuestion(this.report.question_id,this.report.category_id).subscribe(question=>this.questionReported=question);
  }

  viewCategory()
  {
    this.questionService.getCategory(this.report.category_id).subscribe(category=>this.categoryReported = category)
  }
}
