import {Injectable, OnInit} from '@angular/core';
import {Url} from 'url';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Dog} from "../models/dog";

@Injectable({
  providedIn: 'root'
})
export class DogsService implements OnInit {

  public API = 'http://localhost:3000';
  public DOGS = 'dogs';
  public GET = '';
  public GET_ONE = 'show';
  public POST = 'new';
  public PUT = 'edit';
  public DELETE = 'delete';

  constructor(private http: HttpClient) { }

  getDogs() {
    return this.http.get(`${this.API}/${this.DOGS}`).pipe(
      map((response: Response) => {
        const body = response;
        return body || {};
      })
    );
  }

  ngOnInit(): void {
    console.log(this.getDogs());
  }

  postDog(dog: Dog) {
    const data = JSON.stringify(dog);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    return this.http.post(`${this.API}/${this.DOGS}/${ this.POST}`, data, options);
  }
}
