import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Contatto } from '../contatto';
import { ContattoDto } from '../contatto-dto';
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
    this.rubrica.contatti.splice(i, 1);
  }
  
  cerca(searchCriteria) {
    console.log("sono in figlio ricerca");
    if (searchCriteria != "") {
      this.rub = this.rubrica.contatti.filter(c => c.nome == searchCriteria);
    }
    else{
      this.rub = this.rubrica.contatti;
    }
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
