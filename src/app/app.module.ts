import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { DatatoolbarComponent } from './datatoolbar/datatoolbar.component';
import { NavitoolbarComponent } from './navitoolbar/navitoolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    DatatoolbarComponent,
    NavitoolbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
