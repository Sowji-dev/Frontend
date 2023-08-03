import './App.css'
import React from 'react';
import { store } from './app/store'
import { Provider } from 'react-redux'
import Likes from './app/likes/Likes';      
import FruitCart from './app/fruitCart/FruitCart';
import Rating from './app/rating/Rating';
function App() {
  
  return (
    <Provider store={store}>
    <div className='p-5'>
      <h3>App comp</h3>
      <Likes></Likes>
      <Rating></Rating>
      <FruitCart></FruitCart>
    </div>
    </Provider>   
  );
}
export default App;