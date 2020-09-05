export class Report{
  constructor(public id:number, public content:string, public category_id:number,public question_id:number|null,public answer_id:number|null)
  {}
}
