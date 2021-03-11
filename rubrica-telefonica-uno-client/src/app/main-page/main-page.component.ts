import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contatto } from '../contatto';
import { ContattoDto } from '../contatto-dto';
import { ListaContattiDto } from '../lista-contatti-dto';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  contatto: Contatto = new Contatto();

  constructor(private router: Router, public rubrica: RubricaService, private http: HttpClient) {
    //this.caricaContatti();
  }

  ngOnInit(): void {
  }

  conta() {
    console.log("siamo in conta()");
    this.router.navigateByUrl("/count");
  }

  ricerca() {
    console.log("siamo in ricerca()");
    this.router.navigateByUrl("/search");
  }

  logOut() {
    console.log("siamo in logOut()");
    this.router.navigateByUrl("/login");
  }

  aggiungi() {
    let dto: ContattoDto = new ContattoDto();
    dto.contatto = this.contatto;
    let oss: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
      "http://localhost:8080/aggiungi-rubrica",
      dto
    );
    oss.subscribe(v => this.rubrica.contatti = v.listContatto);
    this.contatto = new Contatto();
  }

  /*caricaContatti() {
    let oss: Observable<ListaContattiDto> = this.http.get<ListaContattiDto>("http://localhost:8080/main-page");
    oss.subscribe(v => this.rubrica.contatti = v.listContatto);
  }*/
}
