class BaseDeDatos {
  constructor() {
    this.productos = [];
  }
  
  async traerRegistro() {
    const response = await fetch("js/productos.json");
    this.productos = await response.json();
    return this.productos;
  }

  registroPorId(id) {
    return this.productos.find((producto) => producto.id === id);
  }
}

/* carrito */
class Carrito {
  constructor() {
    this.carrito = this.getCartFromLocalStorage();
    this.total = 0;
    this.totalProductos = 0;
    this.cantidad = 0;
  }
  
  estaEnCarrito({ id }) {
    return this.carrito.find((producto) => producto.id === id);
  }

  getCartFromLocalStorage() {
    const cartData = localStorage.getItem('carrito');
    if (cartData) {
      return JSON.parse(cartData);
    }
    return [];
  }

  comprar(producto) {
    let productoEnCarrito = this.estaEnCarrito(producto);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
    
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    
    console.log(this.carrito);
  }   
}

/* clase productos */
class Producto {
  constructor(id, nombre, precio, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
}

const bd = new BaseDeDatos();

async function cargarProductos() {
  const productos = await bd.traerRegistro();
  console.log(productos);
}

/* boton de comprar */
const botonesComprar = document.querySelectorAll(".btnComprar");
for (const boton of botonesComprar) {
  boton.addEventListener("click", (event) => { 
    event.preventDefault();
    
    const id = Number(boton.dataset.id);
    const producto = bd.registroPorId(id);
    carrito.comprar(producto);
  });
}

const carrito = new Carrito();

/* checkout */
function proceedToCheckout() {
  localStorage.setItem('carrito', JSON.stringify(carrito.carrito));
  window.location.href = 'checkout.html';
}

cargarProductos();

