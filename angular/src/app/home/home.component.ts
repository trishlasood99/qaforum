import { Component, OnInit } from '@angular/core';
import {Category} from '../category.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadedCategory:Category;
  constructor() { }

  ngOnInit(): void {
  }

}
