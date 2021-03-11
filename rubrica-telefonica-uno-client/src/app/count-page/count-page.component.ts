import { HttpClient } from '@angular/common/http';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CounterDto } from '../counter-dto';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-count-page',
  templateUrl: './count-page.component.html',
  styleUrls: ['./count-page.component.css']
})
export class CountPageComponent implements OnInit {

  constructor(private router: Router, public rubrica: RubricaService, private http: HttpClient) {
  }

  numeroContatti = 0;

  ngOnInit(): void {
    this.contaContatti();
  }

  tornaMainPage() {
    console.log("siamo in tornaMainPage()");
    this.router.navigateByUrl("/main");
  }

  contaContatti() {
    let oss: Observable<CounterDto> = this.http.get<CounterDto>(
      "http://localhost:8080/conta");
    oss.subscribe(c => this.numeroContatti = c.numeroContatti);
  }

}
