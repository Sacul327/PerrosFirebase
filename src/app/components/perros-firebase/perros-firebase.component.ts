import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { razaInterfaz } from '../../interfaz/perros.interface';
import { getLocaleId } from '@angular/common';
import { Key } from 'protractor';

@Component({
  selector: 'app-perros-firebase',
  templateUrl: './perros-firebase.component.html',
  styleUrls: ['./perros-firebase.component.css']
})
export class PerrosFirebaseComponent implements OnInit {
  list:String[];

  /* raza:razaInterfaz={
    
      productId:0,
      razaPerro:"",
      tamanio:"",          
      description:"",
      imageUrl:"",
      color: "",
      vida: ""
    }; */
    raza:razaInterfaz[]=[];

  constructor(private _firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  mostrar2(){
    this._firebaseService.getNuevaRaza().subscribe(data=>{
      alert("Guardado con exito")
    console.log(data);
    },
      error => {alert("Error al guardar el dato" + error)}
    );
  }



  /*SACO LA KEY*/
  mostrar3(){
    this._firebaseService.getNuevaRaza().subscribe(data=>{
       
       for(let dato in data){
        console.log(dato);
       }
    },
      error => {alert("Error al guardar el dato" + error)}
    );
  }


  mostrar4(){
    this._firebaseService.getNuevaRaza().subscribe(data=>{
      const dataStr = JSON.stringify(data);
      JSON.parse(dataStr, (key, value) => {
        if (typeof value === 'string') {
          return value.toUpperCase();
        }
        return value;
      });
      function replacer(key, value) {
        console.log(typeof value);
        if (key === 'color') {
          return undefined;
        }
        console.log(value);
        
        return value;
      }
    
    },
      error => {alert("Error al guardar el dato" + error)}
    );
  }

mostrar5(){
    this._firebaseService.getNuevaRaza().subscribe(data=>{
      const dataStr = JSON.stringify(data);

      JSON.parse(dataStr, (key, value) => {
        if (typeof value === 'string') {
          return value.toUpperCase();
        }
        console.log(value.tamanio);
        
        return value;
      });

    },
      error => {alert("Error al guardar el dato" + error)}
    );
  }
  
  getAll(){
    this._firebaseService.getNuevaRaza().subscribe(data=>{
      console.log(data);
      for(let dato in data){
        let objetoNuevo = data[dato];
        objetoNuevo.key = dato;
        this.raza.push(objetoNuevo);        
      }
      console.log(this.raza);   
    });
  }
  
}
