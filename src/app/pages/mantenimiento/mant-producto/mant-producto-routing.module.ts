import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantProductoListaComponent } from './mant-producto-lista/mant-producto-lista.component';

const routes: Routes = [
  {
    path:'',
    component: MantProductoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantProductoRoutingModule { }
