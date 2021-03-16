import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(public rubrica: RubricaService) {
  }

  ngOnInit(): void {
    
  }

  rimuovi(i) {
    console.log("click su rimuovi tabella");
    this.delete.emit(i);
  }
}
