
import './App.css';
import { RouterProvider, createHashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
 import AboutUs from './pages/AboutUs/AboutUs';
import ContentUs from './pages/ContentUs/ContentUs';
import OrderUsers from './pages/OrderUsers/OrderUsers';
import Erorr from "./components/Erorr/Erorr";
 import ProductDetails from './pages/ProductDetails/ProductDetails';
import { CartProvider } from './context/CartContext';
import AllProducts from './pages/AllProducts/AllProducts';

let routering = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/ContentUs", element: <ContentUs /> },
       { path: "/product/:id", element: <ProductDetails /> },
      { path: "/category/:id", element: <AllProducts /> },
       { path: "/OrderUsers", element: <OrderUsers /> },
      { path: "*", element: <Erorr /> },
    ],
  },
]);
function App() {
  return (<>
    <HelmetProvider>
      <CartProvider >
        <RouterProvider router={routering}>
        </RouterProvider>
      </CartProvider>
    </HelmetProvider>
  </>)
}
export default App;