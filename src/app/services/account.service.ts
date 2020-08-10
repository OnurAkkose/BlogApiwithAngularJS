import { Injectable } from '@angular/core';
import {User} from'../login/user'
import { Router } from '@angular/router';
@Injectable()
export class AccountService {

  constructor(private router:Router) { }

  loggedIn = false;

  login(user:User):boolean{
    if(user.userName=="onur"&&user.password=="12345"){
      this.loggedIn = true;
      localStorage.setItem("isLogged",user.userName);
      this.router.navigate(["blogs"]);
      
      return true;
      
    }
    return false;

  }
  isLoggedIn(){
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged");
  }
}
