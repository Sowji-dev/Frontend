import { Link, Outlet } from 'react-router-dom';
import './App.css'
import React, { useState } from 'react'
import { useSelector} from 'react-redux'
function App() {
  var {isLogin}=useSelector(state=>state.loginSlice)
  console.log(isLogin)
  return (
    <div >
      <h3>Westernhills Housing Corporation</h3>
        <nav className="navbar navbar-expand-lg navbar-light bg-orange bg-gradient">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to ='/' className="nav-link text-white">Home</Link>
            </li>
            {
               !isLogin && <>
                   <li className="nav-item">
                    <Link to ='/login' className="nav-link text-white">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to ='/register' className="nav-link text-white">Register</Link>
                  </li>
               </>
            }
           
            {
              isLogin && <>
                   <li className="nav-item">
                    <Link to ='/addcust' className="nav-link text-white">Add Customer</Link>
                  </li>
                  <li className="nav-item">
                    <Link to ='/custlist' className="nav-link text-white">Customer List</Link>  
                  </li>
              </>
            }
           
            <li className="nav-item">
              <Link to ='/projects' className="nav-link text-white">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to ='/about' className="nav-link text-white">About Us</Link>
            </li>
          </ul>
         
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
export default App;