import './App.css'
import React, { useState } from 'react';
import { store } from './app/store'
import { Provider } from 'react-redux'
import Likes from './app/likes/Likes';      
import FruitCart from './app/fruitCart/FruitCart';
import Rating from './app/rating/Rating';
import Darkmode from './app/darkmode/Darkmode';
import { useSelector, useDispatch} from 'react-redux'
import Country from './app/countries/Country';
function App() {
  var theme=useSelector(state=>state.darkmodeSlice.theme)
  
  console.log('from app comp',theme)
  return (
    <div   className={ theme=='dark' ?'darktheme' :'lighttheme'}>
       <div className='p-5'>
          <h3>App comp</h3>
          <Darkmode></Darkmode>
          <Likes></Likes>
          <Rating></Rating>
          <FruitCart></FruitCart>
        </div>
     </div> 
  );
}
export default App;