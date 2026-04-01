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
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import Postview from './components/PostView/Postview.jsx';

const router = createBrowserRouter([
  { path: "/", 
    Component:Roots,
     children:[
      {index:true, element:Home},
      {path:"mobiles", element:<Mobiles/>},
      {path:"laptops", element:<Laptops/>},
      {path:"users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
         Component:Users
        },
        {
          path:'users/:userId',
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          Component:UserDetails
        },
        {
          path:'Posts',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
          Component: Posts
        },
        {
          path:'posts/:postId',
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          Component:Postview
        }
          
        
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
