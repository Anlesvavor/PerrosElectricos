import { Component, OnInit } from '@angular/core';
import { PerrosService } from '../../services/perros.service';
import {Perro} from '../../Perro';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {

  perros: Perro[];

  constructor(public perrosService: PerrosService) { }

  ngOnInit() {
    this.perros = this.perrosService.getPerros();
  }

}
