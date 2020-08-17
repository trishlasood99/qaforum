import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../models/question.model';
import {Answer} from '../models/answer.model';
import {AnswerListService} from '../services/answerlist.service';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'answer-list',
  templateUrl: './answerlist.component.html',
  styleUrls: ['./answerlist.component.css']
})
export class AnswerlistComponent implements OnInit {
  question:Question;
  answers: Answer[]=[];
  newAnswerText="";
  formhidden=1;
  constructor(private route: ActivatedRoute, private answerService: AnswerListService) { }

  ngOnInit(): void {
    this.getQuestion();
    this.getAnswers();
  }
  getAnswers(): void{
    const id2 = +this.route.snapshot.paramMap.get('id2');
    const id = +this.route.snapshot.paramMap.get('id');
    this.answerService.getAnswers(id2,id).subscribe(answers=>this.answers=answers);
  }
  getQuestion(): void{
    const id2 = +this.route.snapshot.paramMap.get('id2');
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id2);
    this.answerService.getQuestion(id2,id).subscribe(question=>this.question=question);

    //this.questionService.getQuestion(id2).subscribe(question=>this.question=question);
  }
  onSubmit(answerContent:string)
  {
    //var newAnswer = new Answer(answerContent,this.question.id,1000,0,0);
    //this.answers.push(newAnswer);
    const id2 = +this.route.snapshot.paramMap.get('id2');
    const id = +this.route.snapshot.paramMap.get('id');
    this.answerService.createAnswer(id,id2,answerContent).subscribe(newAnswer=>this.answers.push(newAnswer));
  }
  displayCreateForm()
  {
    this.formhidden=(this.formhidden==1)?0:1;
  }
}
