import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contatto } from '../contatto';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  contatto: Contatto = new Contatto();

  constructor(private router: Router, public rubrica: RubricaService) { }

  ngOnInit(): void {
  }
  
  aggiungi(){
    this.rubrica.contatti.push(this.contatto);
    this.contatto = new Contatto();
  }

  conta(){
    console.log("siamo in conta()");
    this.router.navigateByUrl("/count");
  }

  ricerca(){
    console.log("siamo in ricerca()");
    this.router.navigateByUrl("/search");
  }
}
