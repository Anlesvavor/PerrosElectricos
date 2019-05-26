import { Injectable } from '@angular/core';
import {Login} from '../Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private logins: Login[] = [
    { usuario: 'usuario', contrasena: 'potato' },
    { usuario: 'q', contrasena: 'q' }
  ];

  addLogin(login: Login): void {
    this.logins.push(login);
  }

  getLogins(): Login[] {
    return this.logins;
  }
}
