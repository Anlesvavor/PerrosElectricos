import {Component, Input, OnInit} from '@angular/core';
import {OpinionsService} from "../../services/opinions.service";
import {Opinion} from "../../models/opinion";

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.sass']
})
export class OpinionsComponent implements OnInit {

  @Input()
    // tslint:disable-next-line:variable-name
  _dog_id: string;
  opinions: Opinion[] = [];

  constructor(private opinionsService: OpinionsService) { }

  ngOnInit() {
    this.opinionsService.getOpinionById(this._dog_id).subscribe(opinions => {
      const tmp: any = opinions;
      this.opinions = tmp.data;
    });
  }

  delete(id: string) {
      this.opinionsService.deleteOpinion(id);
  }
}
