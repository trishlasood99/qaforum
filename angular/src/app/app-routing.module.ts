import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import { QuestionListComponent } from './question-list/question-list.component';
import {AnswerlistComponent} from './answerlist/answerlist.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'category/:id',component:QuestionListComponent},
  {path:'category/:id/question/:id2',component:AnswerlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
