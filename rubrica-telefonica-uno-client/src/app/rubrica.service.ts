import { Injectable } from '@angular/core';
import { Contatto } from './contatto';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  contatti: Contatto[] = [];

  constructor() { }
}
