import { useEffect, useState } from 'react'
import axios from 'axios';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Cart from './pages/Cart';
import Products from './pages/Products';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import SingleProduct from './pages/SingleProduct';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const router= createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'Products/:id',
        element:<SingleProduct/>,
        errorElement:<ErrorPage/>,
        loader:()=>{
          console.log({b:'what',a:2})
          return 1
        }
      },
      {
        path:'/About',
        element:<About/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/Products',
        element:<Products/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/Cart',
        element:<Cart/>,
        errorElement:<ErrorPage/>
      },
    ]
  },
  {
    path:'/Login',
    element:<LogIn/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/Signup',
    element:<SignUp/>,
    errorElement:<ErrorPage/>
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
