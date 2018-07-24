import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
/* IMPORTO INTERFAZ PARA AGREGAR EL OBJETO */
import { razaInterfaz } from 'src/app/interfaz/perros.interface';
import { FirebaseService } from '../../service/firebase.service';


@Component({
  selector: 'app-perros-firebase2',
  templateUrl: './perros-firebase2.component.html',
  styleUrls: ['./perros-firebase.component.css']
})


export class PerrosFirebase2Component implements OnInit {
  
  raza:razaInterfaz={
    
      productId:0,
      razaPerro:"",
      tamanio:"",          
      description:"",
      imageUrl:"la",
      color: "",
      vida: ""
    }
  


  constructor(private _firebaseService:FirebaseService) { }

  ngOnInit() {
  }
  
  guardar(){
    this._firebaseService.nuevaRaza(this.raza).subscribe(data=>{});
  console.log("guardar");
  }
  
  mostrar(){
    console.log(this.raza);
  }

}

