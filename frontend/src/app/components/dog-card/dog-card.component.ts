import {Component, Input, OnInit} from '@angular/core';
import {MatCard} from "@angular/material";
import {Dog} from "../../models/dog";


@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.sass']
})
export class DogCardComponent implements OnInit {

  @Input()
  dog: Dog;

  constructor() { }

  ngOnInit() {
  }

}
