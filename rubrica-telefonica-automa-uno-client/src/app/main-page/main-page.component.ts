import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Automa } from '../automa/automa';
import { AddEvent, AnnullaEvent, ConfermaEvent, ModificaEvent, RimuoviEvent, SelezionaEvent } from '../automa/eventi';
import { AggiungiState, ModificaState, RimuoviState } from '../automa/stati';
import { Contatto } from '../contatto';
import { ContattoDto } from '../contatto-dto';
import { IdDto } from '../id-Dto';
import { ListaContattiDto } from '../lista-contatti-dto';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  contatto: Contatto = new Contatto();
  searchCriterion: string = '';
  automa: Automa;

  //visibilità bottoni (dichiarare proprietà gui)


  constructor(private router: Router, public rubrica: RubricaService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.automa = new Automa(this);
  }

  goToAggiungi(){}
  goToModifica(){}
  goToRicerca(){}
  goToRimuovi(){}
  goToVisualizza(){}


  conta() {
    console.log("siamo in conta()");
    this.router.navigateByUrl("/count");
  }

  ricerca() {
    console.log("siamo in ricerca()");
    this.router.navigateByUrl("/search");
  }

  logOut() {
    console.log("siamo in logOut()");
    this.router.navigateByUrl("/login");
  }

  /*aggiungi() {
    if (this.contatto.nome != "" && this.contatto.cognome != "" && this.contatto.telefono != "") {
      let dto: ContattoDto = new ContattoDto();
      dto.contatto = this.contatto;
      let oss: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
        "http://localhost:8080/aggiungi-rubrica",
        dto
      );
      oss.subscribe(v => this.rubrica.contatti = v.listContatto);
      this.contatto = new Contatto();
    }
  }*/

  nuova() {
    if (this.contatto.nome == null && this.contatto.cognome == null && this.contatto.telefono == null) {
    this.automa.next(new AddEvent());
    }
  }

  modifica() {
    if (this.contatto.nome != null && this.contatto.cognome != null && this.contatto.telefono != null) {
    this.automa.next(new ModificaEvent());
    }
  }

  rimuovi() {
    if (this.contatto.nome != null && this.contatto.cognome != null && this.contatto.telefono != null) {
    this.automa.next(new RimuoviEvent());
    }
  }

  conferma() {
    console.log('stato: ', this.automa.stato);
    if (this.automa.stato instanceof AggiungiState) {
      console.log('sono in conferma aggiungi');
      // chiamata REST nuova
      if (this.contatto.nome != null && this.contatto.cognome != null && this.contatto.telefono != null) {
        let dtoA: ContattoDto = new ContattoDto();
        console.log('nome     : ', this.contatto.nome);
        console.log('cognome  : ', this.contatto.cognome);
        console.log('telefono  : ', this.contatto.telefono);
        dtoA.contatto = this.contatto;
        let ossA: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
          'http://localhost:8080/aggiungi-rubrica',
          dtoA
        );
        ossA.subscribe((r) => (this.rubrica.contatti = r.listContatto));
      }
    } else if (this.automa.stato instanceof ModificaState) {
      console.log('sono in conferma modifica');
      // chiamata REST modifica
      if (this.contatto.nome != null && this.contatto.cognome != null && this.contatto.telefono != null) {
        let dtoM: IdDto = new IdDto();
        dtoM.id = this.contatto.id;
        dtoM.filtro = this.searchCriterion;
        let ossM: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
          'http://localhost:8080/modifica',
          dtoM
        );
        ossM.subscribe((r) => (this.rubrica.contatti = r.listContatto));
      }
    } else if (this.automa.stato instanceof RimuoviState) {
      console.log('sono in conferma rimuovi');
      // chiamata REST rimuovi
      if (this.contatto.nome != null && this.contatto.cognome != null && this.contatto.telefono != null) {
        let dtoR: IdDto = new IdDto();
        dtoR.id = this.contatto.id;
        dtoR.filtro = this.searchCriterion;
        let ossR: Observable<ListaContattiDto> = this.http.post<ListaContattiDto>(
          'http://localhost:8080/cancella-rubrica',
          dtoR
        );
        ossR.subscribe((r) => (this.rubrica.contatti = r.listContatto));
      }
    }
    this.automa.next(new ConfermaEvent());
    this.contatto = new Contatto();
  }

  annulla() {
    this.automa.next(new AnnullaEvent());
    this.contatto = new Contatto();
  }

  seleziona(cont: Contatto) {
    this.automa.next(new SelezionaEvent());
    this.contatto.id = cont.id;
    this.contatto.nome = cont.nome;
    this.contatto.cognome = cont.cognome;
    this.contatto.telefono = cont.telefono;
  }

  aggiorna() {
    let oss: Observable<ListaContattiDto> = this.http.get<ListaContattiDto>(
      'http://localhost:8080/visualizza-lista'
    );
    oss.subscribe((r) => (this.rubrica.contatti = r.listContatto));
  }

}
