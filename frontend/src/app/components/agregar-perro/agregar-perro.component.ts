import { Component, OnInit } from '@angular/core';
import {Perro} from '../../Perro';
import {PerrosService} from '../../services/perros.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-agregar-perro',
  templateUrl: './agregar-perro.component.html',
  styleUrls: ['./agregar-perro.component.css']
})
export class AgregarPerroComponent implements OnInit {
  perroForm = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(''),
    juguete: new FormControl('')
  });

  nuevoPerro: Perro;

  constructor(public perroService: PerrosService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.nuevoPerro = {
      id: this.perroService.getPerros().length + 1,
      nombre: this.perroForm.get('nombre').value,
      edad: this.perroForm.get('edad').value,
      juguete: this.perroForm.get('juguete').value
    };
    console.log(this.nuevoPerro);
    this.perroService.addPerro(this.nuevoPerro);
  }
}
