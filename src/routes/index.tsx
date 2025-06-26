import { Route, Routes } from 'react-router-dom';
import { Cart, Home } from '../pages';
import { Layout } from '../components';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Route>
    </Routes>
  );
}

export default PageRoutes;
