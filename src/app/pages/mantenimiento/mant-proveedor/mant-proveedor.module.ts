import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantProveedorRoutingModule } from './mant-proveedor-routing.module';
import { MantListaComponent } from './mant-lista/mant-lista.component';
import { MantRegistroComponent } from './mant-registro/mant-registro.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantListaComponent,
    MantRegistroComponent
  ],
  imports: [
    CommonModule,
    MantProveedorRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MantProveedorModule { }
