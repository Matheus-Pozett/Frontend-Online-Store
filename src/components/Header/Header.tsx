import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../../services/api';

function Header() {
  const [inputFormHeader, setInputFormHeader] = useState('');
  const [products, setProducts] = useState([]);
  console.log(products);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputFormHeader(value);
  };

  const handleSubmitFormHeader = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchProducts = async () => {
      try {
        const fetchProducts = await getProductsFromCategoryAndQuery('', inputFormHeader);
        setProducts(fetchProducts);
      } catch (error) {
        console.error(error);
      }
    };
    searchProducts();
  };

  return (
    <header>
      <form onSubmit={ handleSubmitFormHeader }>
        <input
          type="text"
          id="buscar"
          value={ inputFormHeader }
          onChange={ handleChange }
        />
        <button type="submit">Procurar produtos</button>
      </form>

      <img src="/logo.png" alt="logo do site" />

      <Link to="/cart" data-testid="shopping-cart-button">
        Carrinho
      </Link>
    </header>
  );
}

export { Header };
