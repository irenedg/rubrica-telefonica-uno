import { Component, OnInit } from '@angular/core';
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

  rub: Contatto[] = [];

  ngOnInit(): void {
  }

  rimuovi(i) {
    this.rubrica.contatti.splice(i, 1);
  }

}
