import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'cliente',
    loadChildren: () => import('./mant-cliente/mant-cliente.module').then(x => x.MantClienteModule)
  },
  {
    path:'empleado',
    loadChildren: () => import('./mant-empleado/mant-empleado.module').then(x => x.MantEmpleadoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
