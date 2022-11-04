import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantClienteListaComponent } from './mant-cliente-lista/mant-cliente-lista.component';

const routes: Routes = [
  {
    path:'',
    component: MantClienteListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantClienteRoutingModule { }
