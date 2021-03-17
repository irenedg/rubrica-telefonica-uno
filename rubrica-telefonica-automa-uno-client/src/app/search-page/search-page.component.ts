import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contatto } from '../contatto';
import { FiltroDto } from '../filtro-dto';
import { IdDto } from '../id-Dto';
import { ListaContattiDto } from '../lista-contatti-dto';
import { RubricaService } from '../rubrica.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchCriterion = "";
  contattoSelezionato: Contatto = new Contatto;
  notificaSelezione: string = "";
  constructor(private router: Router, public rubrica: RubricaService, private http: HttpClient) { }
  ngOnInit(): void {
  }
  cerca() {
    let dto: FiltroDto = new FiltroDto();
    dto.filtro = this.searchCriterion;
    let oss: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
      "http://localhost:8080/search",
      dto
    );
    oss.subscribe(c => this.rubrica.contatti = c.listContatto);
    this.notificaSelezione = "";
    this.contattoSelezionato = new Contatto();
  }
  tornaMain() {
    console.log("siamo in tornaMain()");
    this.router.navigateByUrl("/main");
  }
  seleziona(c: Contatto) {
    this.contattoSelezionato = c;
    this.notificaSelezione = "Il contatto selezionato è: " + c.nome + " " + c.cognome;
  }
  rimuovi() {
    if (this.contattoSelezionato.nome != null && this.contattoSelezionato.cognome != null && this.contattoSelezionato.telefono != null) {
      let dtoR: IdDto = new IdDto();
      dtoR.id = this.contattoSelezionato.id;
      dtoR.filtro = this.searchCriterion;
      let ossR: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
        'http://localhost:8080/cancella-rubrica',
        dtoR
      );
      ossR.subscribe((r) => (this.rubrica.contatti = r.listContatto));
      this.notificaSelezione = "";
      this.contattoSelezionato = new Contatto();
    }
  }
}