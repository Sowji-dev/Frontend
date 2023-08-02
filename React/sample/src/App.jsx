import { Link, Outlet } from 'react-router-dom';
import './App.css'
import React from 'react';
function App() {
  
  return (
    <div className='box'>
        <Link to='/home'>Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to='/aboutus'>About us</Link>&nbsp;&nbsp;&nbsp;
        <Link to='/contact'>Contact</Link>&nbsp;&nbsp;&nbsp;
        <Link to='/services'>Services</Link>&nbsp;&nbsp;&nbsp;
        <Link to='/countries'>Countries</Link>&nbsp;&nbsp;&nbsp;
        <div>
          <Outlet></Outlet>
          </div>
      </div>
  );
}
export default App;