

class BaseDeDatos {
  constructor() {
    this.productos = [];
    
    this.agregarRegistro(1,   "NotebookLenovoV14",   1000,  "notebooks" );
      this.agregarRegistro(2,  "Notebook Lenovo Ip1", 2000,  "notebooks" );
      this.agregarRegistro(3,  "Notebook Lenovo Thinkpad", 3000,  "notebooks" );
      this.agregarRegistro(4,  "Notebook Asus I7", 4000,  "notebooks" );
      this.agregarRegistro(5,  "Notebook Lenovo L15", 5000,  "notebooks" );
      this.agregarRegistro(6,  "Notebook Hp 245", 6000,  "notebooks" );
      this.agregarRegistro(7,  "Notebook Novabook V6", 7000,  "notebooks" );
      this.agregarRegistro(8,  "Notebook HP Victus", 8000,  "notebooks" );
      this.agregarRegistro(9,  "Notebook Exo Smart", 9000,  "notebooks" );
      this.agregarRegistro(10, "Notebook Asus I7-12700h", 10000, "notebooks" );
    
  }

  agregarRegistro(id, nombre, precio, categoria,) {
    const producto = new Producto(id, nombre, precio, categoria,);
    this.productos.push(producto);
  }
  
  traerRegistro(){
    return this.productos;
  }

  registroPorId(id){
    return this.productos.find((producto) => producto.id === id)

   

  }

}



 
  
class Producto {
  constructor(id, nombre, precio, categoria,) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    
  }
}







/* asd */


function cargaProductos(){
  const productos = bd.traerRegistro();


}

/* comprar */

const botonesComprar = document.querySelectorAll(".btnComprar");
for(const boton of botonesComprar){
  boton.addEventListener("click", (event) =>{ 
    event.preventDefault();
    console.log(boton.dataset.id);
    
  })
 

 
  

}

