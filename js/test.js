/* agarra el storage */

function getCartFromLocalStorage() {
  const cartData = localStorage.getItem('carrito');

  if (cartData) {
    return JSON.parse(cartData);
  }
  return [];
}

function displayCart() {
  const cartContainer = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');
  cartContainer.innerHTML = '';

  const cart = getCartFromLocalStorage();

  if (cart.length === 0) {
    cartContainer.innerHTML = 'El carrito está vacío';
    cartTotal.textContent = 'Total: $0'; // actualizamos el total a $0 si el carrito está vacío
    return;
  }

  let total = 0;

  cart.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.nombre} - $${product.precio} - Cantidad: ${product.cantidad}`;
    listItem.style.fontSize = '12px'

    /* boton eliminar */
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      removeProductFromCart(product.id);
      displayCart(); // actualizamos el carrito después de eliminar un producto
    });
    deleteButton.style.fontSize = '10px';

    listItem.appendChild(deleteButton);
    cartContainer.appendChild(listItem);

    total += product.precio * product.cantidad;
  });

  cartTotal.textContent = `Total: $${total}`;
}

function removeProductFromCart(productId) {
  const cart = getCartFromLocalStorage();
  const updatedCart = cart.filter(product => product.id !== productId);
  localStorage.setItem('carrito', JSON.stringify(updatedCart));
}

/* boton de pagar que elimina todo */
function pay() {
  localStorage.removeItem('carrito');
  const cartTotal = document.getElementById('cart-total');
  cartTotal.textContent = '';
  alert('Pago completado!');
  displayCart();
}

window.onload = function() {
  displayCart();
};
