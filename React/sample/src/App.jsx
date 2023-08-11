import './App.css'
import React, { useState } from 'react';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { useSelector, useDispatch} from 'react-redux'
import Likes from './app/features/likes/Likes';
import Darkmode from './app/features/darkmode/Darkmode';
import { Link, Outlet } from 'react-router-dom';
import { productsApi } from './services/productsApi';
function App() {
  var theme=useSelector(state=>state.darkmodeSlice.theme)
  return (
    <div   className={ theme=='dark' ?'darktheme appbox' :'lighttheme appbox'} >
      <Darkmode></Darkmode>

  <nav className="navbar navbar-expand-lg ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link"> <Link to='/rating'>Rating</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"> <Link to='/likesdislikes'>Likes - Dislike</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to='/fruitcart'>Fruit cart</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to='/products'>Products </Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to='/countries'>Countries </Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to='/students'>Students </Link></a>
      </li>
      
    </ul>
  </div>
</nav>

<Outlet></Outlet>

{/* 
       <div classNameName='p-5'>
      
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