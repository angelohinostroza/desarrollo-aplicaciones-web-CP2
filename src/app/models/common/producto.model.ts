export class ProductoModel {
    idproducto: number;
    codigo: string;
    categoriaIdcategoria: number;
    nombre: string;
    stock: number | null;
    imagen: Blob | null;
    estado: string | null;
    //categoriaIdcategoriaNavigation: Categoria | null;
    //detalleIngreso: DetalleIngreso[];
    //detalleVenta: DetalleVenta[];

    constructor(){
        this.idproducto = 0;
        this.codigo = "";
        this.categoriaIdcategoria = 0;
        this.nombre = "";
        this.stock = 0;
        this.imagen = new Blob();
        this.estado = "";
    }
}
