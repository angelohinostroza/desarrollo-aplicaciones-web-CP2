import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { bsConfigModal } from 'src/app/constantes/modal.constants';
import { CategoriaModel } from 'src/app/models/common/categoria.model';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-mant-categoria-lista',
  templateUrl: './mant-categoria-lista.component.html',
  styleUrls: ['./mant-categoria-lista.component.scss']
})
export class MantCategoriaListaComponent implements OnInit {

  categorias: CategoriaModel[] = [];
  categoriaSeleccionada: CategoriaModel = new CategoriaModel();

  modalRef: BsModalRef = new BsModalRef();

  tituloModal: string = "";

  constructor(
    private _categoriaService: CategoriaService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    console.log("primer metodo a ejecutarse");
    this.getAllCategorias(); 
  }

  getAllCategorias() {
    this.categorias = [];
    setTimeout(() => {
      this._categoriaService.getAll().subscribe(
        (data: CategoriaModel[]) => {
          this.categorias = data;
          console.log(data);
        },
        err => {
          console.log("ocurrio un error", err);
        }
      );
    }, 200);

  }

  NuevaCategoria(template: TemplateRef<any>) {
    this.tituloModal = "Nueva Categoria";
    this.categoriaSeleccionada = new CategoriaModel();
    this.openModal(template);
  }
  editarCategoria(item: CategoriaModel, template: TemplateRef<any>) {
    this.tituloModal = "Editar Categoria";
    this.categoriaSeleccionada = item;
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
      this.getAllCategorias();
    }

  }

  deleteCategoria(idcategoria: number) {
    let res = confirm("¿Está de seguro de eliminar este registro?");
    if (res) {
      this._categoriaService.delete(idcategoria).subscribe(
        (data: any) => {
          alert("registro eliminado de forma correcta");
          this.getAllCategorias();
        },
        err => {
          alert("Ocurrio un error");
        }
      );
    }
  }
}
