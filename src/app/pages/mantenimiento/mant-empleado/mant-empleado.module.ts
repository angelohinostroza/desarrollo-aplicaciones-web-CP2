import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantEmpleadoRoutingModule } from './mant-empleado-routing.module';
import { MantEmpleadoListaComponent } from './mant-lista/mant-lista.component';
import { MantRegistroComponent } from './mant-registro/mant-registro.component';


@NgModule({
  declarations: [
    MantEmpleadoListaComponent,
    MantRegistroComponent
  ],
  imports: [
    CommonModule,
    MantEmpleadoRoutingModule
  ]
})
export class MantEmpleadoModule { }
