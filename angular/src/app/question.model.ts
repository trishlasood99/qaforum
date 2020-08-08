import {Category} from './category.model'

export class Question{
  constructor(public title:string,public description:string, public category:Category,public id:number)
  {

  }
}
