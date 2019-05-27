import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Dog} from "../../models/dog";
import {User} from "../../models/user";

@Component({
  selector: 'app-opinion-form',
  templateUrl: './opinion-form.component.html',
  styleUrls: ['./opinion-form.component.sass']
})
export class OpinionFormComponent implements OnInit {

  @Input()
  dog: Dog;
  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
