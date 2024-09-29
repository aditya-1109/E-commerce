import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/checkOut';
import Admin from './pages/Admin';
import Navbar from './pages/Navbar.js';
import { Outlet } from 'react-router-dom'; 
import Login from "./pages/login.js";
import Signup from './pages/signUp.js';
import { AuthProvider } from './services/Auth.js';
import PrivateRoute from './services/PrivateRoute.js';


const Layout = () => {
  return (
    <>
    <Navbar />
      <Outlet />  
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Login />  
  },
  {
    path: "/signUp",
    element: <Signup />
  },
  {
    path: "/Home", 
    element: <PrivateRoute>
    <Layout />
    </PrivateRoute>,  
    children: [
    
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: '/Home/cart',
        element: <Cart />,
      },
      {
        path: '/Home/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/Home/checkout',
        element: <Checkout />,
      },
      {
        path: "/Home/addproduct",
        element: <Admin />,
      }
    ]
  }
]);

const App = () => {
  return (
    <AuthProvider >
    <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
