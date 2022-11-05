import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantCategoriaRoutingModule } from './mant-categoria-routing.module';
import { MantCategoriaListaComponent } from './mant-categoria-lista/mant-categoria-lista.component';
import { MantCategoriaRegistroComponent } from './mant-categoria-registro/mant-categoria-registro.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantCategoriaListaComponent,
    MantCategoriaRegistroComponent
  ],
  imports: [
    CommonModule,
    MantCategoriaRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MantCategoriaModule { }
