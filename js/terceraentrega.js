class BaseDeDatos {
  constructor() {
    this.productos = [];
    
      this.agregarRegistro(1,   "NotebookLenovoV14",   1000,  "notebooks", 5 );
      this.agregarRegistro(2,  "Notebook Lenovo Ip1", 2000,  "notebooks", 5 );
      this.agregarRegistro(3,  "Notebook Lenovo Thinkpad", 3000,  "notebooks", 5 );
      this.agregarRegistro(4,  "Notebook Asus I7", 4000,  "notebooks,", 5 );
      this.agregarRegistro(5,  "Notebook Lenovo L15", 5000,  "notebooks", 5 );
      this.agregarRegistro(6,  "Notebook Hp 245", 6000,  "notebooks", 5 );
      this.agregarRegistro(7,  "Notebook Novabook V6", 7000,  "notebooks", 5 );
      this.agregarRegistro(8,  "Notebook HP Victus", 8000,  "notebooks", 5  );
      this.agregarRegistro(9,  "Notebook Exo Smart", 9000,  "notebooks", 5 );
      this.agregarRegistro(10, "Notebook Asus I7-12700h", 10000, "notebooks", 5 );
    
  }

  agregarRegistro(id, nombre, precio, categoria, stock) {
    const producto = new Producto(id, nombre, precio, categoria,stock);
    this.productos.push(producto);
  }
  
  traerRegistro(){
    return this.productos;
  }

  registroPorId(id){
    return this.productos.find((producto) => producto.id === id)

   

  }

}

/* carrito */
class Carrito{
  constructor(){
    this.carrito = [];
    this.total = 0;
    this.totalProductos = 0;
    this.cantidad = 0;


  }
  estaEnCarrito({ id }){
    return this.carrito.find((producto) => producto.id === id);
  }

  comprar(producto){
    let productoEnCarrito = this.estaEnCarrito(producto);
    if (productoEnCarrito){
      productoEnCarrito.cantidad++;

    } else{
      this.carrito.push({ ...producto, cantidad: 1});
      
    }
    this.listar();
   console.log(this.carrito)
  }
      
  listar(){
  
    
  
  }   
}



  

  /* clase productos */
class Producto {
  constructor(id, nombre, precio, categoria,) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    
  }
}



const bd = new BaseDeDatos();

const divProductos = document.querySelector("#productos")
const divCarrito = document.querySelector("#carrito")


function cargarProductos(){
  const productos = bd.traerRegistro();


}

/* boton de comprar */

const botonesComprar = document.querySelectorAll(".btnComprar");
for (const boton of botonesComprar) {
  boton.addEventListener("click", (event) => { 
    event.preventDefault();
    
    const id = Number(boton.dataset.id);
    const producto = bd.registroPorId(id);
    carrito.comprar(producto)

    
  })
  

}

const carrito = new Carrito();





let cart = [];

function testedu(cart){
  cart.push(this.productos)


  console.log(cart)
}




/* checkout */






function proceedToCheckout() {

  localStorage.setItem('productos', JSON.stringify(productos));
  window.location.href = 'checkout.html';
}


