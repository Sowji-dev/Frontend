import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import MyForm from './MyForm';
import Todo from './Todo';
import Countries from './Countries';
import Todolist from './TodoList';
import CountryDetails from './CountryDetails';
var router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            
            {
                path:'/todo',
                element:<Todolist></Todolist>
            },
            {
                path:'/countries',
                element:<Countries></Countries>
            },
            {
                path:'/countries/details',
                element:<CountryDetails></CountryDetails>
            }
        ]
    },
    {
        path:'/form',
        element:<MyForm></MyForm>
    }
    
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

reportWebVitals();
