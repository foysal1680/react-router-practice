import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router";
import Roots from './components/Roots/Roots.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';

const router = createBrowserRouter([
  { path: "/", 
    Component:Roots,
     children:[
      {index:true, element:Home},
      {path:"mobiles", element:<Mobiles/>},
      {path:"laptops", element:<Laptops/>}
    ]
  },
  {
    path: "about",
    element: <div>About Us</div>
,
  }
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
