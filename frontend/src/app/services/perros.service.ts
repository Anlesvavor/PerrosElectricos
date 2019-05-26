import { Injectable } from '@angular/core';
import {Perro} from '../Perro';

@Injectable({
  providedIn: 'root'
})


export class PerrosService {

  constructor() { }

  private perros: Perro[] = [
    {id: 1, nombre: 'Golondrino', edad: 9, juguete: 'Pelota'},
    {id: 2, nombre: 'Pelusa', edad: 8, juguete: 'Peluche' },
    {id: 3, nombre: 'Terry', edad: 4, juguete: 'Trapo'}
  ];

  addPerro(perro: Perro): void {
    this.perros.push(perro);
  }

  getPerros(): Perro[] {
    return this.perros;
  }

}
