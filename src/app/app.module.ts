import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* importar NG FORM  Y AGREGAR AL IMPORTS */
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PerrosFirebaseComponent } from './components/perros-firebase/perros-firebase.component';
import { PerrosFirebase2Component } from './components/perros-firebase/perros-firebase2.component';
import { Routes } from '@angular/router';
import { APP_ROUTING } from './firebase.routing';
import { FirebaseService } from './service/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    PerrosFirebaseComponent,
    PerrosFirebase2Component,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule  
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


