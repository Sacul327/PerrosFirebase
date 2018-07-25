import { Routes, RouterModule } from '@angular/router';
import { PerrosFirebaseComponent } from './components/perros-firebase/perros-firebase.component';
import { PerrosFirebase2Component } from './components/perros-firebase/perros-firebase2.component';
import { NgModule } from '@angular/core';



const APP_ROUTES: Routes = [
  { path: 'perros', component: PerrosFirebaseComponent},
  { path: 'perros2/:id', component: PerrosFirebase2Component},
  { path: 'perros2', component: PerrosFirebase2Component},
  { path: '**', pathMatch: 'full', redirectTo: 'perros' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class APP_ROUTING { }
