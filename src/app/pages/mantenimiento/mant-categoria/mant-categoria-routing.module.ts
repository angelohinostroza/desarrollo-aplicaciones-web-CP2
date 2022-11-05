import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantCategoriaListaComponent } from './mant-categoria-lista/mant-categoria-lista.component';

const routes: Routes = [
  {
    path:'',
    component: MantCategoriaListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantCategoriaRoutingModule { }
