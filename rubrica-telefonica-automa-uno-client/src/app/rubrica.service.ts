import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contatto } from './contatto';
import { ListaContattiDto } from './lista-contatti-dto';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  contatti: Contatto[] = [];

  constructor(private http: HttpClient) {
    this.caricaContatti();
   }

   caricaContatti() {
    let oss: Observable<ListaContattiDto> = this.http.get<ListaContattiDto>("http://localhost:8080/main-page");
    oss.subscribe(v => this.contatti = v.listContatto);
  }
}
