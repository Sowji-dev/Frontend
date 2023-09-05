import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,} from "react-router-dom";
import CustList from './app/features/CustList';
 import AboutUs from './app/pages/AboutUs';
import Projects from './app/pages/Projects';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Home from './app/pages/Home';
import House from './app/features/House';
import Wishlist from './app/features/Wishlist';
import Login from './app/features/myForms/Login';
import Register from './app/features/myForms/Register';
import AddCust from './app/features/myForms/AddCust';
import AddProperty from './app/features/myForms/AddProperty';
import ThreeD from './app/pages/ThreeD';
import Site from './app/pages/Site';
import Working from './app/pages/Working';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addcust',
                element:<AddCust></AddCust>
            },
            {
                path:'/custlist',
                element:<CustList></CustList>
            },
            {
                path:'/projects',
                element:<Projects></Projects>,
                children:[
                    {
                        path:'/projects/',
                        element:<ThreeD></ThreeD>
                    },
                    {
                        path:'/projects/des3d',
                        element:<ThreeD></ThreeD>
                    },
                    {
                        path:'/projects/site',
                        element:<Site></Site>
                    },
                    {
                        path:'/projects/working',
                        element:<Working></Working>
                    }
                ]
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/houses',
                element:<House></House>
            },
            {
                path:'/wishlist',
                element:<Wishlist></Wishlist>
            },
            {
                path:'/property',
                element:<AddProperty></AddProperty>
            }

            
        ]
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
);

reportWebVitals();