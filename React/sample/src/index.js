import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'; 
import AboutUs from './AboutUs';
import Products from './Products';
import ProdDetails from './ProdDetails';
var router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/products',
                element:<Products></Products>,
                children:[
                    {
                        path:'/products/proddetails/:pid',
                        element:<ProdDetails></ProdDetails>
                    }
                ]
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

reportWebVitals();