export class ProveedorModel {
    idproveedor: number;
    tipoPersona: string;
    nombre: string;
    tipoDocumento: string;
    numDocumento: string;
    direccion: string | null;
    distrito: string | null;
    departamento: string | null;
    telefono: string | null;
    email: string | null;
    estado: string | null;
    //ingreso: Ingreso[];

    constructor(){
        this.idproveedor = 0;
        this.tipoPersona = "";
        this.nombre = "";
        this.tipoDocumento = "";
        this.numDocumento = "";
        this.direccion = "";
        this.distrito = "";
        this.departamento = "";
        this.telefono = "";
        this.email = "";
        this.estado = "";
    }
}