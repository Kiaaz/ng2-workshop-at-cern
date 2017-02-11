import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

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
  selected: Array<string> = [];

  constructor(private swapiService: SwapiService,
    private snackBarService: MdSnackBar) { }

  ngOnInit() {
    this.people$ = this.swapiService.fetchPeople();
  }

  onPersonClick(name: string) {
    this.snackBarService.open(name, 'close');
  }

}
