import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Opinion} from "../models/opinion";

@Injectable({
  providedIn: 'root'
})
export class OpinionsService {

  public API = 'http://localhost:3000';
  public OPINIONS = 'opinions';
  public GET = '';
  public GET_ONE = 'show';
  public POST = 'new';
  public PUT = 'edit';
  public DELETE = 'delete';
  public DOGID = 'dogid';
  public DELETE_BY_DOG = 'deletebydogid';


  constructor(private http: HttpClient) { }

  getOpinions() {
    return this.http.get(`${this.API}/${this.OPINIONS}`).pipe(
      map((response: Response) => {
        const body = response;
        return body || {};
      })
    );
  }

  postOpinion(opinion: Opinion) {
    const data = JSON.stringify(opinion);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    return this.http.post(`${this.API}/${this.OPINIONS}/${ this.POST}`, data, options);
  }

  getOpinionById(id: string) {
    return this.http.get(`${this.API}/${this.OPINIONS}/${this.DOGID}/${id}`).pipe(
      map((response: Response) => {
        const body = response;
        return body || {};
      })
    );
  }

  deleteByDogId(id: string) {
    return this.http.delete(`${this.API}/${this.OPINIONS}/${this.DELETE_BY_DOG}/${id}`);
  }

  deleteOpinion(id: string) {
    return this.http.delete(`${this.API}/${this.OPINIONS}/${this.DELETE}/${id}`);
  }
}
