import { useEffect, useState } from 'react'
import axios from 'axios';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Cart from './pages/Cart';
import Products, {loader as ProdutsLoader} from './pages/Products';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import SingleProduct from './pages/SingleProduct';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Landing, { Loader as LandingLoader } from './pages/Landing';
import { loader as SinglePageLoader } from './pages/SingleProduct';
import {action as registrationAction} from './pages/SignUp'
import {action as logInAction} from './pages/LogIn'
import store from './utilities/store';
import CheckOut from './pages/CheckOut';
import {loader as checkOutLoader} from "./pages/CheckOut"
import {action as checkOutAction} from './pages/CheckOut'
import Order from './pages/Order';
import {loader as orderLoader} from './pages/Order';

const queryClient = new QueryClient()
const router= createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        errorElement:<ErrorPage/>,
        loader:LandingLoader(queryClient),
      },
      {
        path:'/Products/:id',
        element:<SingleProduct/>,
        errorElement:<ErrorPage/>,
        loader:SinglePageLoader(queryClient),
      },
      {
        path:'/About',
        element:<About/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/Products',
        element:<Products/>,
        errorElement:<ErrorPage/>,
        loader:ProdutsLoader(queryClient),
      },
      {
        path:'/Cart',
        element:<Cart/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/Checkout',
        element:<CheckOut/>,
        errorElement:<ErrorPage/>,
        loader:checkOutLoader(store,queryClient),
        action:checkOutAction(store,queryClient)
      },
      {
        path:"/Order",
        element:<Order/>,
        loader:orderLoader(store,queryClient)
      }
    ]
  },
  {
    path:'/Login',
    element:<LogIn/>,
    errorElement:<ErrorPage/>,
    action: logInAction(store,queryClient ),
  },

  {
    path:'/Signup',
    element:<SignUp/>,
    errorElement:<ErrorPage/>,
    action : registrationAction(queryClient),
  },
  
  
])

function App() { 
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
    </>
  )
}

export default App
