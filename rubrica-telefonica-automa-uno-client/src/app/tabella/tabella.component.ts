import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contatto } from '../contatto';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  @Output() select: EventEmitter<Contatto> = new EventEmitter<Contatto>();

  constructor(public rubrica: RubricaService) {
  }

  ngOnInit(): void {
  }

  seleziona(c: Contatto) {
    console.log("click su seleziona tabella");
    this.select.emit(c);
  }
}
