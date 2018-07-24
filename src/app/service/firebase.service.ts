import { Injectable, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { razaInterfaz } from '../interfaz/perros.interface';
/* import { map } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';
 */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService{

  urlFirebase:string="https://blogperros-572eb.firebaseio.com/raza.json";

  constructor(private http: HttpClient ) {   }
 
  nuevaRaza ( raza: razaInterfaz) {
    let body = JSON.stringify( raza);
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.urlFirebase, body, {headers} ).pipe(map( res => {
      console.log(res);
      return res;
    }));
  }


}
/* export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBj0rCCm3UInT7u64fcodIxozNqmQVAYaY',
    authDomain: 'blogperros-572eb.firebaseapp.com',
    databaseURL: 'https://blogperros-572eb.firebaseio.com',
    projectId: 'blogperros-572eb',
    storageBucket: 'blogperros-572eb.appspot.com',
    messagingSenderId: '227654417038'
  }
}; */
