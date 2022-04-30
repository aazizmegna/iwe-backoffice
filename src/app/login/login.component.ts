import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User()

  constructor(public route: Router) { }


  ngOnInit(): void {
  }
  public async  doLogin(loginForm: NgForm){
    try {
      const user = await Auth.signIn(this.user.email, this.user.password);
      this.route.navigate(['/home']);
  } catch (error) {
      console.log('error signing in', error);

      alert(error);

  }
    
  }

}
