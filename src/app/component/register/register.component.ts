import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) {}
  ngOnInit(): void {

  }

  // Register Method
  register() {
    if (this.email == ''){
      alert('Please Enter Your Email');
      return;
    }

    if (this.password == ''){
      alert('Please Enter Your Password');
      return;
    }

    this.auth.login(this.email, this.password);
    // Return an Empty string
    this.email = '';
    this.password = '';
  }
}
