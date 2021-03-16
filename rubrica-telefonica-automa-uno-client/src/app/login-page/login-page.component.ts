import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EsitoLoginDto } from '../esito-login-dto';
import { Utente } from '../utente';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  utente = new Utente();
  esitoLogin: boolean;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin() {
    let dto: Utente = new Utente();
    dto.user = this.utente.user;
    dto.password = this.utente.password;
    let oss: Observable<EsitoLoginDto> = this.http.post<EsitoLoginDto>(
      "http://localhost:8080/check-login", dto
    );
    oss.subscribe(v => (v.esitoLogin) ?
      this.router.navigateByUrl("/main") :
      this.router.navigateByUrl("/error"));
  }
}
