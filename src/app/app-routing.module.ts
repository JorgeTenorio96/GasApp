import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaGasolinerasComponent } from './components/lista-gasolineras/lista-gasolineras.component';

const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: 'gasolinera'},
  {path: 'gasolinera', component: ListaGasolinerasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
