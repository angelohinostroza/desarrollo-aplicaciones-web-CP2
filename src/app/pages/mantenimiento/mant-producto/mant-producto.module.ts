import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantProductoRoutingModule } from './mant-producto-routing.module';
import { MantProductoRegistroComponent } from './mant-producto-registro/mant-producto-registro.component';
import { MantProductoListaComponent } from './mant-producto-lista/mant-producto-lista.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantProductoListaComponent,
    MantProductoRegistroComponent,
  ],
  imports: [
    CommonModule,
    MantProductoRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MantProductoModule { }
