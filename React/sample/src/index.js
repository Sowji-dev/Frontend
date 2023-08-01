import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sports from './Sports';
import Article from './Article';
const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/sports',
                element:<Sports></Sports>
            },
            {
                path:'/article',
                element:<Article></Article>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router}></RouterProvider>
);

reportWebVitals();

