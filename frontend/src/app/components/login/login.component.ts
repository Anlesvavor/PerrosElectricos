import { Component, OnInit } from '@angular/core';
import {Login} from '../../Login';
import {LoginService} from '../../services/login.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    usuario: new FormControl(''),
    contrasena: new FormControl('')
  });

  constructor(public loginService: LoginService) { }

  loggeado = false;

  ngOnInit() {
  }

  onSubmit() {
    const intento: Login = {
      usuario: this.loginForm.get('usuario').value,
      contrasena: this.loginForm.get('contrasena').value,
    };
    console.log(intento);

    if (this.loginService.getLogins().indexOf(intento) !== null) {
      this.loggeado = true;
    }
    console.log(this.loggeado);
  }
}
