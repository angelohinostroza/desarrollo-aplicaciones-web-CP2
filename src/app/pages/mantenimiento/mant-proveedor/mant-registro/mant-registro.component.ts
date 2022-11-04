import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorModel } from 'src/app/models/common/proveedor.model';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-mant-registro',
  templateUrl: './mant-registro.component.html',
  styleUrls: ['./mant-registro.component.scss']
})                                    

export class MantRegistroComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() proveedor: ProveedorModel = new ProveedorModel();
  @Output() closeModalEmit = new EventEmitter<boolean>();

  //declaramos nuestro formulario
  formularioProveedor: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _proveedorService:ProveedorService
  ) { 

    this.formularioProveedor = this.fb.group({
      iproveedor: [{ value: null, disabled: true}, [Validators.required]],
      tipoPersona: [null, [Validators.required]],
      nombre: [null, [Validators.required,]],
      tipoDocumento: [null, [Validators.required]],
      numDocumento: [null, [Validators.required, Validators.maxLength(12), Validators.minLength(8),Validators.pattern(/^([0-9])*$/)]],
      direccion: [null, [Validators.required]],
      distrito: [null, [Validators.required, Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      departamento: [null, [Validators.required,Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      email: [null, [Validators.email,]],
      telefono: [null, [Validators.required, Validators.pattern(/^([0-9])*$/),Validators.maxLength(9), Validators.minLength(5),]],
      estado: [null, [Validators.required]]
    });
  }

  get f() { return this.formularioProveedor.controls; }
  ngOnInit(): void {
    this.formularioProveedor.patchValue(this.proveedor);
    console.log(this.proveedor);
  }

  cerrarModal(res: boolean) {
    this.closeModalEmit.emit(res);
  }

  guardarDatos() {

    let formData:ProveedorModel = this.formularioProveedor.getRawValue();
    console.log(formData);
    
    debugger;
    if(formData.idproveedor  == 0)
    {
      //crear un registro
      this.crearRegistro(formData)
    }
    else {
      this.actualizarRegistro(formData)
      //actualizar un registro
    }
   
  }
  
  crearRegistro(item:ProveedorModel)
  {
    this._proveedorService.create(item).subscribe(
      (data:ProveedorModel)=> {
        alert("Registro Creado de forma satisfactoría")
        this.cerrarModal(true);
      }
    );
  }
  actualizarRegistro(item:ProveedorModel)
  {
    this._proveedorService.update(item) .subscribe(
      (data:ProveedorModel)=> {
        alert("Registro Actualizado de forma satisfactoría")
        this.cerrarModal(true);
      }
    );
  }

}
