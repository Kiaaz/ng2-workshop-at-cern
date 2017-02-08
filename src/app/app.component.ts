import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello cern';
  people$: Observable<Array<{}>>;
  searchExpression: string;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.people$ = this.swapiService.fetchPeople();
  }

}
