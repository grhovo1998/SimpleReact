import Home from '../components/HOme';
import About from '../components/About';
import Product from '../components/Product';
import Test from '../components/Test';

export const routes =  [ 
    {
      path: "/",
      element: <Home />,
    },
    {
      children: [
        { path: "/about", element: <About /> },
        { path: "/about/test", element: <Test />,}]
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "*",
      element: <>Not found</>,
    }
  ]