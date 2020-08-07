import {Question} from './question.model'

export class Answer{
  constructor(public content:string,public question:Question,public id:number,public upvotes:number,public userUpvoted:boolean)
  {

  }
}
