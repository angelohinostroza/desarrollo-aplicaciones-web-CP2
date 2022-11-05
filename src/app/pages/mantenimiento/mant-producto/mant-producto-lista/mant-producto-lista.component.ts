import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { bsConfigModal } from 'src/app/constantes/modal.constants';
import { ProductoModel } from 'src/app/models/common/producto.model';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-mant-producto-lista',
  templateUrl: './mant-producto-lista.component.html',
  styleUrls: ['./mant-producto-lista.component.scss']
})
export class MantProductoListaComponent implements OnInit {

  productos: ProductoModel[] = [];
  productoSeleccionado: ProductoModel = new ProductoModel();

  modalRef: BsModalRef = new BsModalRef();

  tituloModal: string = "";

  constructor(
    private _productoService: ProductoService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    console.log("primer metodo a ejecutarse");
    this.getAllProductos();
  }

  getAllProductos() {
    this.productos = [];
    setTimeout(() => {
      this._productoService.getAll().subscribe(
        (data: ProductoModel[]) => {
          this.productos = data;
          console.log(data);
        },
        err => {
          console.log("ocurrio un error", err);
        }
      );
    }, 200);

  }

  NuevoProducto(template: TemplateRef<any>) {
    this.tituloModal = "Nuevo producto";
    this.productoSeleccionado = new ProductoModel();
    this.openModal(template);
  }
  editarProducto(item: ProductoModel, template: TemplateRef<any>) {
    this.tituloModal = "Editar Producto";
    this.productoSeleccionado = item;
    this.openModal(template);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef =
      this.modalService.show(
        template,
        Object.assign({},  
          bsConfigModal));

  }


  recibeFuncionCerrarModal(res: boolean) {
    this.modalService.hide();
    if (res) {
      this.getAllProductos();
    }

  }

  deleteProducto(idproducto: number) {
    let res = confirm("¿Está de seguro de eliminar este registro?");
    if (res) {
      this._productoService.delete(idproducto).subscribe(
        (data: any) => {
            alert("registro eliminado de forma correcta");
          this.getAllProductos();
        },
        err => {
          alert("Ocurrio un error");
        }
      );
    }
  }
}
