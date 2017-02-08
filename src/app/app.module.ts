import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SwapiService } from './swapi.service';
import { PersonComponent } from './person/person.component';
import { FilterByNamePipe } from './filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // .forRoot() returns a module with all of its providers defined inside
    MaterialModule.forRoot()
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
