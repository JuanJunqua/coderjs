function getCartFromLocalStorage() {
  const cartData = localStorage.getItem('carrito');
  

  if (cartData) {
      return JSON.parse(cartData)
  }
  console.log(cartData)
  return [];
}
 
function displayCart() {
  const cartContainer = document.getElementById('cart-list');
  cartContainer.innerHTML = '';

  const cart = getCartFromLocalStorage()

  if (cart.length === 0) {
      cartContainer.innerHTML = 'El carrito esta vacio';
      return;
  }

  cart.forEach(product => {
      const listItem = document.createElement('li');
      listItem.textContent = `${product.nombre} - $${product.precio} - `;
      cartContainer.appendChild(listItem)
  });
}

function pay() {
  localStorage.removeItem('carrito');

  alert('Pago completado!')
}


window.onload = function() {
  displayCart();
}