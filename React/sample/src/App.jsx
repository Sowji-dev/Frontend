import { Link, Outlet } from 'react-router-dom';
import './App.css'
import React from 'react';
function App() {
  
  return (
    <div >
      <h3>Westernhills Housing Corporation</h3>
        <nav className="navbar navbar-expand-lg navbar-light bg-orange bg-gradient">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to ='/' className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
               <Link to ='/addcust' className="nav-link text-white">Add Customer</Link>
            </li>
            <li className="nav-item">
               <Link to ='/custlist' className="nav-link text-white">Customer List</Link>  
            </li>
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