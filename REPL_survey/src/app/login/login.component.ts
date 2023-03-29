import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserWrapper } from '../model/outputdo';
import { UserInput } from '../model/userinput';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private userService: UserService) { }

  LoginCheck(): void {
    const userInput: UserInput = { 
      username: '',
      password: ''
    };
    this.userService.getUserJson(userInput)
      .subscribe((response: UserWrapper) => {
      console.log(response);
      });
    }
  }

