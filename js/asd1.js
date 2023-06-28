const cartItems = [];
let cartTotal = 0; 


/* PRODUCTOS */
const products = [
  { name: 'Notebooks', price: 1000 },
  { name: 'Fuentes', price: 2000 },
  { name: 'Gabinetes', price: 500 },
  { name: 'Mothers', price: 2000 },
];

/* FUNCTIONS */
function addToCart(index) {
  const product = products[index];
  cartItems.push(product); 
  cartTotal += product.price;
  updateCart(); 
}


function removeFromCart(index) {
  const { price } = cartItems[index]; 
  cartItems.splice(index, 1); 
  cartTotal -= price; 
  updateCart(); 
}


function clearCart() {
  cartItems.length = 0; 
  cartTotal = 0; 
  updateCart(); 
}


function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  cartItemsElement.innerHTML = ''; 


  for (let i = 0; i < cartItems.length; i++) {
    const { name, price } = cartItems[i];
    
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - $${price}`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.onclick = function() {
      removeFromCart(i);
    };

    listItem.appendChild(removeButton);
    cartItemsElement.appendChild(listItem);
  }
  
  cartTotalElement.textContent = `Total: $${cartTotal}`;
}