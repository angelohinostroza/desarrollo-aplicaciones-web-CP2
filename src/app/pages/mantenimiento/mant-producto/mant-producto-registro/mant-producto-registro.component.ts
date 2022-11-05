import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoModel } from 'src/app/models/common/producto.model';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-mant-producto-registro',
  templateUrl: './mant-producto-registro.component.html',
  styleUrls: ['./mant-producto-registro.component.scss']
})
export class MantProductoRegistroComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() producto: ProductoModel = new ProductoModel();
  @Output() closeModalEmit = new EventEmitter<boolean>();
  
  formularioProducto: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _productoService:ProductoService
  ) { 

  this.formularioProducto = this.fb.group({
      idproducto: [{ value: null, disabled: true}, [Validators.required]],
      codigo: [null, [Validators.required, Validators.pattern(/^([0-9])*$/),Validators.maxLength(8), Validators.minLength(8),]],
      nombre: [null, [Validators.required,]],
      stock: [null, [Validators.required, Validators.pattern(/^([0-9])*$/),Validators.maxLength(8), Validators.minLength(8),]],
      estado: [null, [Validators.required]]
    });
  }

  get f() { return this.formularioProducto.controls; }
  ngOnInit(): void {

    this.formularioProducto.patchValue(this.producto);
    console.log(this.producto);

  }
  cerrarModal(res: boolean) {
    this.closeModalEmit.emit(res);
  }

  guardarDatos() {

    let formData:ProductoModel = this.formularioProducto.getRawValue();
    console.log(formData);
    
    debugger;
    if(formData.idproducto  == 0)
    {
      //crear un registro
      this.crearRegistro(formData)
    }
    else {
      this.actualizarRegistro(formData)
      //actualizar un registro
    }
   
  }
  
  crearRegistro(item:ProductoModel)
  {
    this._productoService.create(item).subscribe(
      (data:ProductoModel)=> {
        alert("Registro Creado de forma satisfactoría")
        this.cerrarModal(true);
      }
    );
  }
  actualizarRegistro(item:ProductoModel)
  {
    this._productoService.update(item) .subscribe(
      (data:ProductoModel)=> {
        alert("Registro Actualizado de forma satisfactoría")
        this.cerrarModal(true);
      }
    );
  }

}
