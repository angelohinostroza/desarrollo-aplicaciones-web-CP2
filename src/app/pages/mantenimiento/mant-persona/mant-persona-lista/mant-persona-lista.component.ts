import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-mant-persona-lista',
  templateUrl: './mant-persona-lista.component.html',
  styleUrls: ['./mant-persona-lista.component.scss']
})
export class MantPersonaListaComponent implements OnInit {

  constructor(
    private _clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes()
  {
    this._clienteService.getAll().subscribe(
      (data:any) => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  

}
