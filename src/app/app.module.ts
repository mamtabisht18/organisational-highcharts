import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OrganisationComponent } from './organisation/organisation.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganisationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
