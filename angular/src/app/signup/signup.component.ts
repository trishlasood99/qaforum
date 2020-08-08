import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../user.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false
  errorMessage='';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  //onSubmit(name:string,username:string,password:string,email:string)
  onSubmit()
  {
    //User user = new User(name,username,password,email);
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
