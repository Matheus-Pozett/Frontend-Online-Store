import { useState } from 'react';

function Home() {
  const [productList, setProductList] = useState([]);

  return (
    <div>
      {productList.length === 0 && (
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      )}

    </div>
  );
}

export { Home };
