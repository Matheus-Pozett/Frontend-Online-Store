import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
import { Layout } from '../components';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
      </Route>
    </Routes>
  );
}

export default PageRoutes;
