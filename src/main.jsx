import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componenets/Root/Root';
import Home from './componenets/Home/Home';
import About from './componenets/About/About';
import Contact from './componenets/Contact/Contact';
import Shop from './componenets/Shop/Shop';
import ErrorPage from './componenets/ErrorPage/ErrorPage';
import NewCard from './componenets/NewCard/NewCard';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children :[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/shop',
        element:<Shop></Shop>,
        loader: () => fetch('Shop.json')
      },
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path:'/newCard',
        element:<NewCard></NewCard>
      }
      
    
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// https://gist.githubusercontent.com/rumman6677/14a3bbb21bf05c3ad55e2427da381568/raw/9d62c1a00d551c75aeda87b8b990a58a3b336c29/gistfile1.txt
