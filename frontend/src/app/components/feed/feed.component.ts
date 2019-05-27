import { Component, OnInit } from '@angular/core';
import {DogsService} from '../../services/dogs.service';
import {Dog} from '../../models/dog';
import {MatCard} from "@angular/material";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  dogs: Dog[] = [];

  constructor(private dogsService: DogsService) { }

  getDogs() {
    this.dogsService.getDogs().subscribe( dogs => {
      const tmp: any = dogs;
      // for (const v of tmp.data.docs) {
      //   v._image = 'data:image/jpeg;base64,' + v._image;
      // }
      this.dogs = tmp.data.docs;

      console.log(this.dogs);
    });
  }

  ngOnInit() {
    this.getDogs();

  }

}
