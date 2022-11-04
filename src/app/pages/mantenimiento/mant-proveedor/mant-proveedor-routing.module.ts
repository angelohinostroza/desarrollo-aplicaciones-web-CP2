import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantClienteListaComponent } from '../mant-cliente/mant-cliente-lista/mant-cliente-lista.component';
import { MantListaComponent } from './mant-lista/mant-lista.component';

const routes: Routes = [
  {
    path:'',
    component: MantListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantProveedorRoutingModule { }
