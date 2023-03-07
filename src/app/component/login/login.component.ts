import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  // // Login Method
  // login() {
  //   if (this.email == ''){
  //     alert('Please Enter Your Email');
  //     return;
  //   }

  //   if (this.password == ''){
  //     alert('Please Enter Your Password');
  //     return;
  //   }

  //   this.auth.login(this.email, this.password);
  //   // Return an Empty string
  //   this.email = '';
  //   this.password = '';
  // }
}
