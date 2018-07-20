import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PerrosFirebaseComponent } from './components/perros-firebase/perros-firebase.component';
import { PerrosFirebase2Component } from './components/perros-firebase/perros-firebase2.component';
import { Routes } from '@angular/router';
import { APP_ROUTING } from './firebase.routing';

@NgModule({
  declarations: [
    AppComponent,
    PerrosFirebaseComponent,
    PerrosFirebase2Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
