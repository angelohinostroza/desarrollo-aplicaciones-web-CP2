export class ProductoModel {
    idproducto: number;
    categoriaIdcategoria: number;
    codigo: string;
    nombre: string;
    stock: number | null;
    imagen: string | null;
    estado: string | null;
    //categoriaIdcategoriaNavigation: Categoria | null;
    //detalleIngreso: DetalleIngreso[];
    //detalleVenta: DetalleVenta[];

    constructor(){
        this.idproducto = 0;
        this.categoriaIdcategoria = 0;
        this.codigo = "";
        this.nombre = "";
        this.stock = 0;
        this.imagen = "";
        this.estado = "";
    }
}