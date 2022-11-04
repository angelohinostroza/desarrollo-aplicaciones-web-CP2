import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteModel } from 'src/app/models/common/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-mant-cliente-registro',
  templateUrl: './mant-cliente-registro.component.html',
  styleUrls: ['./mant-cliente-registro.component.scss']
})
export class MantClienteRegistroComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() cliente: ClienteModel = new ClienteModel();
  @Output() closeModalEmit = new EventEmitter<boolean>();

  //declaramos nuestro formulario
  formularioCliente: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _clienteService:ClienteService
  ) {

    this.formularioCliente = this.fb.group({
      idcliente: [{ value: null, disabled: true}, [Validators.required]],
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

  get f() { return this.formularioCliente.controls; }
  ngOnInit(): void {

    this.formularioCliente.patchValue(this.cliente);
    console.log(this.cliente);

  }
  cerrarModal(res: boolean) {
    this.closeModalEmit.emit(res);
  }

  guardarDatos() {

    let formData:ClienteModel = this.formularioCliente.getRawValue();
    console.log(formData);
    
    debugger;
    if(formData.idcliente  == 0)
    {
      //crear un registro
      this.crearRegistro(formData)
    }
    else {
      this.actualizarRegistro(formData)
      //actualizar un registro
    }
   
  }
  
  crearRegistro(item:ClienteModel)
  {
    this._clienteService.create(item).subscribe(
      (data:ClienteModel)=> {
        alert("Registro Creado de forma satisfactoría")
        this.cerrarModal(true);
      }
    );
  }
  actualizarRegistro(item:ClienteModel)
  {
    this._clienteService.update(item) .subscribe(
      (data:ClienteModel)=> {
        alert("Registro Actualizado de forma satisfactoría")
        this.cerrarModal(true);
      }
    );
  }
}
