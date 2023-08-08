import './App.css'
import React, { useState } from 'react';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { useSelector, useDispatch} from 'react-redux'
import Likes from './app/features/likes/Likes';
import Darkmode from './app/features/darkmode/Darkmode';
import { Link, Outlet } from 'react-router-dom';
function App() {
  var theme=useSelector(state=>state.darkmodeSlice.theme)
  return (
    <div   className={ theme=='dark' ?'darktheme appbox' :'lighttheme appbox'} >
      <Darkmode></Darkmode>

  <nav class="navbar navbar-expand-lg ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item ">
        <a class="nav-link"> <Link to='/rating'>Rating</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"> <Link to='/likesdislikes'>Likes - Dislike</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><Link to='/fruitcart'>Fruit cart</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><Link to='/products'>Products </Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><Link to='/countries'>Countries </Link></a>
      </li>
      
    </ul>
  </div>
</nav>

<Outlet></Outlet>

{/* 
       <div className='p-5'>
      
          <h3>App comp</h3>
          <Products></Products>
          <Darkmode></Darkmode>
          <Likes></Likes>
          <Rating></Rating>
          <FruitCart></FruitCart>
        </div> */}
       
       
     </div> 
  );
}
export default App;