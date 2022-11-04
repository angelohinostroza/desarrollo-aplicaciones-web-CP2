import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantClienteRoutingModule } from './mant-cliente-routing.module';
import { MantClienteListaComponent } from './mant-cliente-lista/mant-cliente-lista.component';
import { MantClienteRegistroComponent } from './mant-cliente-registro/mant-cliente-registro.component';
import { ModalModule } from 'ngx-bootstrap/modal';          
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantClienteListaComponent,
    MantClienteRegistroComponent
  ],
  imports: [
    CommonModule,
    MantClienteRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MantClienteModule { }
