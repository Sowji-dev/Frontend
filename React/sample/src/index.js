import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home'
import AboutUs from './AboutUs';
import Contact from './Contact';
import Countries from './Countries';
import Services from './Services';
import ReactSpa from './ReactSpa';
import AngularSpa from './AngularSpa';
import CountryInfo from './CountryInfo';

var router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/countries',
                element:<Countries></Countries>,
                children:[
                    {
                        path:'/countries/countryinfo/:code',
                        element:<CountryInfo></CountryInfo>
                    }
                ]
            },
            {
                path:'/reactspa',
                element:<ReactSpa></ReactSpa>
            },
            {
                path:'/angspa',
                element:<AngularSpa></AngularSpa>
            }
        ]
        
    },
    {
        path:'/services',
        element:<Services></Services>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

reportWebVitals();
