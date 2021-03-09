import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from '../utente';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  utente = new Utente();

  utenteDB = "admin";
  passwordDB = "admin";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  checkLogin(){
    if (this.utenteDB ==  this.utente.user && this.passwordDB ==  this.utente.password){
      this.router.navigateByUrl("/main");
    } else {
      this.router.navigateByUrl("/error");
    }
  }
}
