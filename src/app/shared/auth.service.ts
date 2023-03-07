import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }
  // Create a Login Method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then( ()=> {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/dashboard']);
    }, err => {
      // alert('Something Went Wrong');
      alert(err.message)
      this.router.navigate(['/login']);
    })
  }

  // Create a register Method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( ()=> {
      alert('Registration was successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message)
      this.router.navigate(['/register']);
    })
  }

  // Create a sign out method
  logout() {
    this.fireauth.signOut().then( ()=> {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message)
      // this.router.navigate(['/login']);
    })
  }
}
