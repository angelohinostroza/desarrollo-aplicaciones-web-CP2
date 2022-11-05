import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaModel } from 'src/app/models/common/categoria.model';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-mant-categoria-registro',
  templateUrl: './mant-categoria-registro.component.html',
  styleUrls: ['./mant-categoria-registro.component.scss']
})
export class MantCategoriaRegistroComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() categoria: CategoriaModel = new CategoriaModel();
  @Output() closeModalEmit = new EventEmitter<boolean>();

  formularioCategoria: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _categoriaService:CategoriaService
  ) { 
    this.formularioCategoria = this.fb.group({
      idcategoria: [{ value: null, disabled: true}, [Validators.required]],
      nombre: [null, [Validators.required,]],
      condicion: [null, [Validators.required]]
    });
  }

  get f() { return this.formularioCategoria.controls; }
  ngOnInit(): void {

    this.formularioCategoria.patchValue(this.categoria);
    console.log(this.categoria);

  }
  cerrarModal(res: boolean) {
    this.closeModalEmit.emit(res);
  }

  guardarDatos() {

    let formData:CategoriaModel = this.formularioCategoria.getRawValue();
    console.log(formData);
    
    debugger;
    if(formData.idcategoria  == 0)
    {
      //crear un registro
      this.crearRegistro(formData)
    }
    else {
      this.actualizarRegistro(formData)
      //actualizar un registro
    }
   
  }
  
  crearRegistro(item:CategoriaModel)
  {
    this._categoriaService.create(item).subscribe(
      (data:CategoriaModel)=> {
        alert("Registro Creado de forma satisfactoría")
        this.cerrarModal(true);
      }
    );
  }
  actualizarRegistro(item:CategoriaModel)
  {
    this._categoriaService.update(item) .subscribe(
      (data:CategoriaModel)=> {
        alert("Registro Actualizado de forma satisfactoría")
        this.cerrarModal(true);
      }
    );
  }

}
