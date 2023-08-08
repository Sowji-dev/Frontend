import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products from './app/features/products/Products';
import FruitCart from './app/features/fruitCart/FruitCart';
import LikeSlice from './app/features/likes/likeSlice';
import Likes from './app/features/likes/Likes';
import Rating from './app/features/rating/Rating';
import Countries from './app/features/countries/Countries';
var router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/products',
                element: <Products></Products>,
                
            },
            {
                path:'/rating',
                element: <Rating></Rating>
            },
            {
                path:'/likesdislikes',
                element: <Likes></Likes>
            },
            {
                path:'/fruitcart',
                element: <FruitCart></FruitCart>
            },
            {
                path:'/countries',
                element: <Countries></Countries>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
        <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
        </Provider>
    
    
   
  
);

reportWebVitals();

//  {/* <Provider store={store}>
//           <App />
//     </Provider> */}