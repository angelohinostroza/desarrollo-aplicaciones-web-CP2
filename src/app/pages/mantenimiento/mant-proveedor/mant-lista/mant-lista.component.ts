import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { bsConfigModal } from 'src/app/constantes/modal.constants';
import { ProveedorModel } from 'src/app/models/common/proveedor.model';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-mant-lista',
  templateUrl: './mant-lista.component.html',
  styleUrls: ['./mant-lista.component.scss']
})
export class MantListaComponent implements OnInit {

  proveedores: ProveedorModel[] = [];
  proveedorSeleccionado: ProveedorModel = new ProveedorModel();

  modalRef: BsModalRef = new BsModalRef();

  tituloModal: string = "";

  constructor(
    private _proveedorService: ProveedorService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    console.log("primer metodo a ejecutarse");
    this.getAllProveedores();
  }

  getAllProveedores() {
    this.proveedores = [];
    setTimeout(() => {
      this._proveedorService.getAll().subscribe(
        (data: ProveedorModel[]) => {
          this.proveedores = data;
          console.log(data);
        },
        err => {
          console.log("ocurrio un error", err);
        }
      );
    }, 200);

  }

  NuevoProveedor(template: TemplateRef<any>) {
    this.tituloModal = "Nuevo Proveedor";
    this.proveedorSeleccionado = new ProveedorModel();
    this.openModal(template);
  }
  editarProveedor(item: ProveedorModel, template: TemplateRef<any>) {
    this.tituloModal = "Editar Proveedor";
    this.proveedorSeleccionado = item;
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
      this.getAllProveedores();
    }

  }

  deleteProveedor(idproveedor: number) {
    let res = confirm("¿Está de seguro de eliminar este registro?");
    if (res) {
      this._proveedorService.delete(idproveedor).subscribe(
        (data: any) => {
          alert("registro eliminado de forma correcta");
          this.getAllProveedores();
        },
        err => {
          alert("Ocurrio un error");
        }
      );
    }
  }
}
