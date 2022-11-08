import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClienteModel } from 'src/app/models/common/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { bsConfigModal } from 'src/app/constantes/modal.constants';

@Component({
  selector: 'app-mant-cliente-lista',
  templateUrl: './mant-cliente-lista.component.html',
  styleUrls: ['./mant-cliente-lista.component.scss']
})
export class MantClienteListaComponent implements OnInit {

  clientes: ClienteModel[] = [];
  clienteSeleccionado: ClienteModel = new ClienteModel();

  modalRef: BsModalRef = new BsModalRef();

  tituloModal: string = "";
  
  constructor(
    private _clienteService: ClienteService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    console.log("primer metodo a ejecutarse");
    this.getAllClientes();
  }

  getAllClientes() {
    this.clientes = [];
    setTimeout(() => {
      this._clienteService.getAll().subscribe(
        (data: ClienteModel[]) => {
          this.clientes = data;
          console.log(data);
        },
        err => {
          console.log("ocurrio un error", err);
        }
      );
    }, 200);

  }
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.clienteSeleccionado.numDocumento = filtro.trim().toLowerCase();
  }  

  NuevoCliente(template: TemplateRef<any>) {
    this.tituloModal = "Nuevo Cliente";
    this.clienteSeleccionado = new ClienteModel();
    this.openModal(template);
  }
  editarCliente(item: ClienteModel, template: TemplateRef<any>) {
    this.tituloModal = "Editar Cliente";
    this.clienteSeleccionado = item;
    this.openModal(template);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef =
      this.modalService.show(
        template,
        Object.assign({}, { class: "gray modal-xl" },
          bsConfigModal));

  }


  recibeFuncionCerrarModal(res: boolean) {
    this.modalService.hide();
    if (res) {
      this.getAllClientes();
    }

  }

  deleteCliente(idcliente: number) {
    let res = confirm("¿Está de seguro de eliminar este registro?");
    if (res) {
      this._clienteService.delete(idcliente).subscribe(
        (data: any) => {
          alert("registro eliminado de forma correcta");
          this.getAllClientes();
        },
        err => {
          alert("Ocurrio un error");
        }
      );
    }
  }
}  
