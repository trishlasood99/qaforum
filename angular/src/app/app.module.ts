import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import {FormsModule} from  '@angular/forms';
import { CategoryListComponent } from './category-list/category-list.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AnswerComponent } from './answer/answer.component';
import { AnswerlistComponent } from './answerlist/answerlist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authInterceptorProviders } from './auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryListComponent,
    QuestionComponent,
    QuestionListComponent,
    AppheaderComponent,
    CategorydetailComponent,
    HomeComponent,
    AboutComponent,
    AnswerComponent,
    AnswerlistComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
