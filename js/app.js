const productos = [
    {name: 'notebooks', price: 1000},
    {name: 'gabinetes', price: 200},
    {name: 'fuentes', price:100},
    {name: 'monitores', price: 1000},
    {name: 'mothers', price: 500}

]


const cartItems = [];
    let cartTotal = 0;


    function addToCart(name, price) {
      cartItems.push({ name, price });
      cartTotal += price;
      console.log(cartItems);
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
        console.log(cartItems);
        updateCart();
      }

      
      function updateCart() {
        const cartItemsElement = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        cartItemsElement.innerHTML = '';
  
     
        for (let i = 0; i < cartItems.length; i++) {
          const { product, price } = cartItems[i]; 
  
          const listItem = document.createElement('li');
          listItem.textContent = `${product} - $${price}`;
          
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Borrar';
          removeButton.onclick = function() {
            removeFromCart(i);
          };
  
          listItem.appendChild(removeButton);
          cartItemsElement.appendChild(listItem);
        }
        
        cartTotalElement.textContent = `Total: $${cartTotal}`; 
      }

