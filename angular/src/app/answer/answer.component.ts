import { Component, OnInit,Input } from '@angular/core';
import {Answer} from '../models/answer.model';
import {AnswerListService} from '../services/answerlist.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() ans:Answer;
  hideAnswer=false;
  constructor(private answerService: AnswerListService) { }

  ngOnInit(): void {
  }

  removeUpvote()
  {
    this.answerService.removeUpvote(this.ans.id,this.ans.question.id,this.ans.question.category.id).subscribe(()=>console.log("Removed upvote"));
    this.ans.upvotes--;
    this.ans.userUpvoted=false;
  }
  createUpvote()
  {
    this.answerService.createUpvote(this.ans.id,this.ans.question.id,this.ans.question.category.id).subscribe(()=>console.log("Removed upvote"));
    this.ans.upvotes++;
    this.ans.userUpvoted=true;
  }

  deleteAnswer()
  {
    this.answerService.deleteAnswer(this.ans.id,this.ans.question.id,this.ans.question.category.id).subscribe(()=>console.log("Deleted answer"));
    this.hideAnswer=true;
  }

}
