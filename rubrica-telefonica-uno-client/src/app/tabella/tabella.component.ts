import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Contatto } from '../contatto';
import { ContattoDto } from '../contatto-dto';
import { FiltroDto } from '../filtro-dto';
import { IdDto } from '../id-Dto';
import { ListaContattiDto } from '../lista-contatti-dto';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  constructor(public rubrica: RubricaService, private http: HttpClient) {
    this.rub = this.rubrica.contatti;
  }
  //searchCriteria: string;

  rub: Contatto[] = [];

  ngOnInit(): void {
  }

  rimuovi(i) {
    console.log(i);
    console.log(this.rubrica.contatti);
    let dto: IdDto = new IdDto();
    dto.id = this.rubrica.contatti[i].id;
    let oss: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
      "http://localhost:8080/cancella-rubrica",
      dto
    );
    oss.subscribe(v => this.rubrica.contatti = v.listContatto);
  }

  cerca(searchCriteria) {
    let dto: FiltroDto = new FiltroDto();
    dto.filtro = searchCriteria;
    let oss: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
      "http://localhost:8080/search",
      dto
    );
    oss.subscribe(c => this.rubrica.contatti = c.listContatto);
  }

  aggiungi(contatto) {
    let dto: ContattoDto = new ContattoDto();
    dto.contatto = contatto;
    let oss: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
      "http://localhost:8080/aggiungi-rubrica",
      dto
    );
    oss.subscribe(v => this.rubrica.contatti = v.listContatto);
    contatto = new Contatto();
  }

}
