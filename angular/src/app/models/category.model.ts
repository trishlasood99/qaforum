export class Category{
  public id:number;
  public name:string;
  public description:string;


  constructor(name:string, description:string,id:number)
  {
    this.name=name;
    this.description=description;
    this.id=id;
  }
}
