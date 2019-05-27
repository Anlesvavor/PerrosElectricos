import {Component, Input, OnInit} from '@angular/core';
import {MatCard} from "@angular/material";
import {Dog} from "../../models/dog";
import {DogsService} from "../../services/dogs.service";
import {OpinionsService} from "../../services/opinions.service";


@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.sass']
})
export class DogCardComponent implements OnInit {

  @Input()
  dog: Dog;

  constructor(
    private dogsService: DogsService,
    private opinionsService: OpinionsService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.dogsService.dropDog(this.dog._id);
  }
}
