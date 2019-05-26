import { Injectable } from '@angular/core';
import {Gato} from '../Gato';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  constructor() { }

  private gatos: Gato[] = [
    { id: 1, nombre: 'Filemonio', edad: 4, pasatiempo: 'Tirar macetas' },
    { id: 2, nombre: 'Garfield', edad: 16, pasatiempo: 'Lasaña' }
    ];

  addGato(gato: Gato): void {
    this.gatos.push(gato);
  }

  getGatos(): Gato[] {
    return this.gatos;
  }

}
