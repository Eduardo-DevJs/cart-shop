import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/cart/Cart';
import Layout from './components/Layouts/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);
