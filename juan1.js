
let cart = [];

function addToCart(productName, productPrice) {
  const product = {
    name: productName,
    price: productPrice
  };
  cart.push(product);
  console.log(cart);
}


function proceedToCheckout() {

  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'checkout.html';
}
