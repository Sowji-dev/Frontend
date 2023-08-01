import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import MyForm from './MyForm';
import Todo from './Todo';
import Countries from './Countries';
var router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/form',
                element:<MyForm></MyForm>
            },
            {
                path:'/todo',
                element:<Todo></Todo>
            },
            {
                path:'/countries',
                element:<Countries></Countries>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

reportWebVitals();
