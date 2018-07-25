import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
/* IMPORTO INTERFAZ PARA AGREGAR EL OBJETO */
import { razaInterfaz } from 'src/app/interfaz/perros.interface';
import { FirebaseService } from '../../service/firebase.service';
import { post } from 'selenium-webdriver/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perros-firebase2',
  templateUrl: './perros-firebase2.component.html',
  styleUrls: ['./perros-firebase.component.css']
})


export class PerrosFirebase2Component implements OnInit {
  key:string='';
  raza:razaInterfaz={
    
      productId:0,
      razaPerro:"",
      tamanio:"",          
      description:"",
      imageUrl:"",
      color: "",
      vida: ""
    }
  


    constructor(private _firebaseService:FirebaseService, private activarRuta: ActivatedRoute) {
      this.activarRuta.params.subscribe( parametros => {
        this.key = parametros['key'];
      });
    }

  ngOnInit() {
  }
  
  guardar(e){
    if(e==='POST'){
    this._firebaseService.nuevaRaza(this.raza).subscribe(data=>{
      alert("Guardado con exito")},
      error => {alert("Error al guardar el dato" + error)}
    );}
    if(e==='PUT'){
      this._firebaseService.actNuevaRaza(this.raza,this.key).subscribe(data=>{
        alert("Guardado con exito")},
        error => {alert("Error al guardar el dato" + error)}
      );}
  }
  
  
  mostrar(){
    console.log(this.raza);
  }

  filterName:string;
  clear(){
    this.filterName = '';
  }
}

