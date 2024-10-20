
import './App.css'
import { RouterProvider, createHashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Erorr from "./components/Erorr/Erorr";
import Categories from './components/Categories/Categories';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContentUs from './components/ContentUs/ContentUs';
import PageHoodies from './components/Pages/PageHoodies/PageHoodies';
import PageShorts from './components/Pages/PageShorts/PageShorts';
import PageTshirts from './components/Pages/PageTshirts/PageTshirts';
import PageSocks from './components/Pages/PageSocks/PageSocks';
import PageUndershirt from './components/Pages/PageUndershirt/PageUndershirt';
import LayoutOff from './components/LayoutOff/LayoutOff';
let routering = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/ContentUs", element: <ContentUs /> },
      { path: "/Categories", element: <Categories /> },
      {path: "/Hoodies", element: <LayoutOff />
        , children: [
          { index: true, element: <PageHoodies /> },
          { index: 'Hoodies', element: <PageHoodies /> },
          { path: "Shorts", element: <PageShorts /> },
          { path: "Tshirts", element: <PageTshirts /> },
          { path: "Socks", element: <PageSocks /> },
          { path: "Undershirt", element: <PageUndershirt /> },
        ]
      },
      {path: "/Shorts", element: <LayoutOff />
        , children: [
          { index: true, element: <PageShorts /> },
          { index: "Shorts", element: <PageShorts /> },
          { path: "Hoodies", element: <PageHoodies /> },
          { path: "Shorts", element: <PageShorts /> },
          { path: "Tshirts", element: <PageTshirts /> },
          { path: "Socks", element: <PageSocks /> },
          { path: "Undershirt", element: <PageUndershirt /> },
        ]
      },
      {path: "/Tshirts", element: <LayoutOff />
        , children: [
          { index: true, element: <PageTshirts /> },
          { index: "Tshirts", element: <PageTshirts /> },
          { path: "Hoodies", element: <PageHoodies /> },
          { path: "Shorts", element: <PageShorts /> },
          { path: "Socks", element: <PageSocks /> },
          { path: "Undershirt", element: <PageUndershirt /> },
        ]
      },
      {path: "/Socks", element: <LayoutOff />
        , children: [
          { index: true, element: <PageSocks /> },
          { index: "Socks", element: <PageSocks /> },
          { path: "Hoodies", element: <PageHoodies /> },
          { path: "Shorts", element: <PageShorts /> },
          { path: "Shorts", element: <PageShorts /> },
          { path: "Tshirts", element: <PageTshirts /> },
          { path: "Undershirt", element: <PageUndershirt /> },
        ]
      },
      {path: "/Undershirt", element: <LayoutOff />
        ,
        children: [
          { index: true, element: <PageUndershirt /> },
          { index: "Undershirt", element: <PageUndershirt /> },
          { path: "Hoodies", element: <PageHoodies /> },
          { path: "Shorts", element: <PageShorts /> },
          { path: "Shorts", element: <PageShorts /> },
          { path: "Tshirts", element: <PageTshirts /> },
          { path: "Socks", element: <PageSocks /> },
        ]
      },
      { path: "*", element: <Erorr /> },
    ],
  },
]);
function App() {

  return (<>
    <HelmetProvider>
      <RouterProvider router={routering}>
      </RouterProvider>
    </HelmetProvider>

  </>
  )
}

export default App
