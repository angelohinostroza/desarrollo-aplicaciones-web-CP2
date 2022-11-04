import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'cliente',
    loadChildren: () => import('./mant-cliente/mant-cliente.module').then(x => x.MantClienteModule)
  },
  {
    path:'proveedor',
    loadChildren: () => import('./mant-proveedor/mant-proveedor.module').then(x => x.MantProveedorModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
