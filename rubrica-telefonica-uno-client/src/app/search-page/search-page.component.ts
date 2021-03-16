import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  searchCriteria = "";

  constructor(private router: Router, public rubrica: RubricaService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  tornaMain(){
    console.log("siamo in tornaMain()");
    this.router.navigateByUrl("/main");
  }

  rimuoviS(i){
    console.log("sono in rimuovi di Search")
    let dto: IdDto = new IdDto();
    dto.id = this.rubrica.contatti[i].id;
    dto.filtro = this.searchCriteria;
    let oss: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
      "http://localhost:8080/cancella-rubrica",
      dto
    );
    oss.subscribe(v => this.rubrica.contatti = v.listContatto);
  }

  cerca() {
    let dto: FiltroDto = new FiltroDto();
    dto.filtro = this.searchCriteria;
    let oss: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
      "http://localhost:8080/search",
      dto
    );
    oss.subscribe(c => this.rubrica.contatti = c.listContatto);
  }
}
