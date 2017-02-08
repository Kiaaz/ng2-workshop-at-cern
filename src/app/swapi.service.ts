import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SwapiService {
  private baseUrl = 'http://swapi.co/api';

  constructor(private http: Http) { }

  fetchPeople(): Observable<Array<{}>> {
    return this.http
      .get(`${this.baseUrl}/people/`)
      .map(response => response.json().results);
  }
}
