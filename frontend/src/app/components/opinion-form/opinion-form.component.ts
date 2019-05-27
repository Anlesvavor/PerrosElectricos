import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Dog} from '../../models/dog';
import {User} from '../../models/user';
import {OpinionsService} from '../../services/opinions.service';
import {Router} from '@angular/router';
import {Opinion} from '../../models/opinion';

@Component({
  selector: 'app-opinion-form',
  templateUrl: './opinion-form.component.html',
  styleUrls: ['./opinion-form.component.sass']
})
export class OpinionFormComponent implements OnInit {

  opinionForm: FormGroup;
  opinions: any = [];
  post: Opinion = new Opinion();

  @Input()
    // tslint:disable-next-line:variable-name
  _dog_id: string;
  @Input()
    // tslint:disable-next-line:variable-name
  _user_id: string;

  constructor(private opinionsService: OpinionsService,
              private fb: FormBuilder,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.opinionForm = this.fb.group({
      opinion: null
    });
  }

  onSubmit() {
    this.post._user_id = '0';
    this.post._dog_id = this._dog_id;
    this.post._opinion = this.opinionForm.value.opinion;
    console.log(this.post);
    this.opinionsService.postOpinion(this.post).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
