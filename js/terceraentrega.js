class BaseDeDatos {
  constructor() {
    this.productos = [];
  }
  

  /* fetch de productos , error si no puede agarrar el json */

  async traerRegistro() {
    return new Promise((resolve, reject) => {
      fetch("js/productos.json")
        .then(response => response.json())
        .then(productos => {
          this.productos = productos;
          resolve(productos);
        })
        .catch(error => {
          reject(error);
        });
    });
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




const buyButtons = document.querySelectorAll('.buy-button');


/* funcion para los botones de comprar tengan la animacion */


function applyPressEffect(event) {
  const button = event.target;
  button.style.transform = 'translateY(2px)';
}


function removePressEffect(event) {
  const button = event.target;
  button.style.transform = 'translateY(0)';
}


buyButtons.forEach(button => {
  button.addEventListener('mousedown', applyPressEffect);
  button.addEventListener('mouseup', removePressEffect);
  button.addEventListener('mouseleave', removePressEffect);
});