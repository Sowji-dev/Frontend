import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';
var router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        // children:[
        //     {
        //         path:'/services',
        //         element:<Services></Services>
        //     },
        //     {
        //         path:'/products',
        //         element:<Products></Products>
        //     }
        // ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
