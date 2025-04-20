let dec = document.querySelectorAll('.product__quantity-control_dec');
let inc = document.querySelectorAll('.product__quantity-control_inc');

dec.forEach(decrement => {
  decrement.addEventListener('click', event => {
    if(Number(event.target.nextElementSibling.textContent) !== 1) {
      event.target.nextElementSibling.textContent = Number(event.target.nextElementSibling.textContent) - 1;
    }
  })
})

inc.forEach(increment => {
  increment.addEventListener('click', event => {
      event.target.previousElementSibling.textContent = Number(event.target.previousElementSibling.textContent) + 1;
  })
})

let add = document.querySelectorAll('.product__add');
add.forEach (button => {
  button.addEventListener('click', event => {
    let product = event.target.closest('[data-id]');
    let productId = product.dataset.id;
    let srcImgProduct = product.querySelector('.product__image').src
    let quantityProduct = product.querySelector('.product__quantity-value').textContent;
    
    let cart = document.querySelector('.cart__products');

    let matchingItem = cart.querySelector(`[data-id="${productId}"]`)
    if(matchingItem) {
      matchingItem.querySelector('.cart__product-count').textContent = Number(matchingItem.querySelector('.cart__product-count').textContent) + Number(quantityProduct);
    }else {
      let cartItem = document.createElement('div');
      cartItem.classList.add('cart__product');
      cartItem.dataset.id = productId;

      cart.appendChild(cartItem);
      cartItem.innerHTML = `<img class="cart__product-image" src="${srcImgProduct}"><div class="cart__product-count">${quantityProduct}</div>`
    }
  })
})
