import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-count-page',
  templateUrl: './count-page.component.html',
  styleUrls: ['./count-page.component.css']
})
export class CountPageComponent implements OnInit {

  constructor(private router: Router, public rubrica: RubricaService) { 
    this.numeroContatti = rubrica.contatti.length;
  }

  numeroContatti= 0;

  ngOnInit(): void {
  }

  tornaMainPage(){
    console.log("siamo in tornaMainPage()");
    this.router.navigateByUrl("/main");
  }

}
