import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [inputFormHeader, setInputFormHeader] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputFormHeader(value);
  };

  return (
    <header>
      <form>
        <input
          type="text"
          id="buscar"
          value={ inputFormHeader }
          onChange={ handleChange }
        />
        <button>Procurar produtos</button>
      </form>

      <img src="/logo.png" alt="logo do site" />

      <Link to="/cart" data-testid="shopping-cart-button">
        Carrinho
      </Link>
    </header>
  );
}

export { Header };
