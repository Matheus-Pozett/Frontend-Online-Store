import { useState } from 'react';

function Cart() {
  const [productsCart, setProductsCart] = useState([]);
  return (
    <div>
      {
        productsCart.length === 0
        && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      }
    </div>
  );
}

export { Cart };
