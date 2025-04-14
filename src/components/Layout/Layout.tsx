import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Categories } from '../Categories';

function Layout() {
  return (
    <div>
      <Header />
      <Categories />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { Layout };
