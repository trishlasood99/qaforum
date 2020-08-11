import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        //this.roles = user.roles;

        //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        //this.showModeratorBoard = this.roles.includes('ROLE_USER');

        //this.username = user.username;
      }
  }

  logoutUser()
  {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
