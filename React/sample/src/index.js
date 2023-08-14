import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,} from "react-router-dom";
import Home from './app/features/pages/Home';
import AddCust from './app/features/addCust/AddCust';
import CustList from './app/features/custList/CustList';
import AboutUs from './app/features/pages/AboutUs';
import Projects from './app/features/pages/Projects';
import { Provider } from 'react-redux';
import { store } from './app/store';
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
                element:<Projects></Projects>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            
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
