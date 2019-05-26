import { Component, OnInit } from '@angular/core';
import { GatosService } from '../../services/gatos.service';
import {Gato} from '../../Gato';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit {


  gatos: Gato[];

  constructor(public gatosService: GatosService) { }

  ngOnInit() {
    this.gatos = this.gatosService.getGatos();
  }

}
