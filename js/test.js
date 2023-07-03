function getCartFromLocalStorage() {
  const cartData = localStorage.getItem('productos');

  if (cartData) {
      return JSON.parse(cartData)
  }

  return [];
}

function displayCart() {
  const cartContainer = document.getElementById('cart-list');
  cartContainer.innerHTML = '';

  const cart = getCartFromLocalStorage()

  if (cart.lenght === 0) {
      cartContainer.innerHTML = 'El carrito esta vacio, sadge';
      return;
  }

  cart.forEach(product => {
      const listItem = document.createElement('li');
      listItem.textContent = `${product.name} - $${product.price}`;
      cartContainer.appendChild(listItem)
  });
}

function pay() {
  localStorage.removeItem('cart');

  alert('Pago completado!')
}


window.onload = function() {
  displayCart();
}