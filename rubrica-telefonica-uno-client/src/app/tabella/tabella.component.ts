import { Component, Input, OnInit, Output } from '@angular/core';
import { Contatto } from '../contatto';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  constructor(public rubrica: RubricaService) {
    this.rub = this.rubrica.contatti;
  }
//searchCriteria: string;
 
  rub: Contatto[] = [];

  ngOnInit(): void {
  }

  rimuovi(i) {
    this.rubrica.contatti.splice(i, 1);
  }
  cerca(searchCriteria){
    console.log("sono in figlio ricerca");
    console.log("searchCriteria", searchCriteria);
    this.rub = this.rubrica.contatti.filter(c => c.nome == searchCriteria);
    console.log(this.rub);
  }

}
