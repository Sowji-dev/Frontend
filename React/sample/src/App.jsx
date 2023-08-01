import { Link, Outlet } from 'react-router-dom';
import './App.css'
import React from 'react';

function App() {
  
  return (
   
      <div>
        <Link to ='/products'>Products</Link>
        <Link to ='/aboutus'>About us</Link>
        <div> <Outlet></Outlet></div>
      </div>
    
 
  );
}
export default App;