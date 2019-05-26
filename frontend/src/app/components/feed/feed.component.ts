import { Component, OnInit } from '@angular/core';
import {DogsService} from '../../services/dogs.service';
import {Dog} from '../../models/dog';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  dogs: Dog[] = [];

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.dogsService.getDogs().subscribe( dogs => {
      const tmp: any = dogs;
      this.dogs = tmp.data.docs;
      console.log(this.dogs);
    });
  }

}
