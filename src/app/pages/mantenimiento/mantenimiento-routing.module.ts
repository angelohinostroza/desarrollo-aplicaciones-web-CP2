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
  },
  {
    path:'categoria',
    loadChildren: () => import('./mant-categoria/mant-categoria.module').then(x => x.MantCategoriaModule)
  },
  {
    path:'producto',
    loadChildren: () => import('./mant-producto/mant-producto.module').then(x => x.MantProductoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
