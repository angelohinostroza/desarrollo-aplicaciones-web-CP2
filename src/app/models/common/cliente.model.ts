export class ClienteModel {
    idcliente: number;
    tipoPersona: string;
    nombre: string;
    tipoDocumento: string;
    numDocumento: string;
    direccion: string | null;
    distrito: string | null;
    departamento: string | null;
    email: string | null;
    telefono: string | null;
    estado: string | null;
    //venta: Venta[];
    constructor(){
        this.idcliente = 0;
        this.tipoPersona = "";
        this.nombre = "";
        this.tipoDocumento = "";
        this.numDocumento = "";
        this.direccion = "";
        this.distrito = "";
        this.departamento = "";
        this.email = "";
        this.telefono = "";
        this.estado = "";
    }
}