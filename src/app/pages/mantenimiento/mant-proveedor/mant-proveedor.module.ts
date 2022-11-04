import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantProveedorRoutingModule } from './mant-proveedor-routing.module';
import { MantProveedorListaComponent } from './mant-lista/mant-lista.component';
import { MantRegistroComponent } from './mant-registro/mant-registro.component';


@NgModule({
  declarations: [
    MantProveedorListaComponent,
    MantRegistroComponent
  ],
  imports: [
    CommonModule,
    MantProveedorRoutingModule
  ]
})
export class MantProveedorModule { }
