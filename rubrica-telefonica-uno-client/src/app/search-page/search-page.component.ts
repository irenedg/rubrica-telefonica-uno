import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchCriteria = "";

  constructor(private router: Router, public rubrica: RubricaService) { }

  ngOnInit(): void {
  }

  tornaMain(){
    console.log("siamo in tornaMain()");
    this.router.navigateByUrl("/main");
  }

  
}
