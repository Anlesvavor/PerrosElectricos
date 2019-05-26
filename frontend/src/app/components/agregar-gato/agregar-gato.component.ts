import { Component, OnInit } from '@angular/core';
import { GatosService } from '../../services/gatos.service';
import {Gato} from '../../Gato';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-gato',
  templateUrl: './agregar-gato.component.html',
  styleUrls: ['./agregar-gato.component.css']
})
export class AgregarGatoComponent implements OnInit {


  gatoForm = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(''),
    pasatiempo: new FormControl('')
  });

  nuevoGato: Gato;

  constructor(public gatoService: GatosService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.nuevoGato = {
      id: this.gatoService.getGatos().length + 1,
      nombre: this.gatoForm.get('nombre').value,
      edad: this.gatoForm.get('edad').value,
      pasatiempo: this.gatoForm.get('pasatiempo').value
    };
    console.log(this.nuevoGato);
    this.gatoService.addGato(this.nuevoGato);
  }
}
