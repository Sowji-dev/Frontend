import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { logout } from '../slice/loginSlice';
import { useNavigate } from "react-router-dom";
function Nav() {
    var userdet=useSelector(state=>state.loginSlice.userdet)
    var dispatch=useDispatch()
  console.log(userdet)
  const nav = useNavigate();
  function logoutUser(){
    dispatch(logout())
    nav("/");
  }
  return (
    <div className='d-flex'>
    <div className='logo'>
      <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnK1lw_-yUZu7nJoQcb6Ea7rfm7ANRFBzcQ&usqp=CAU'/>
    
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-orange bg-gradient">
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link to ='/' className="nav-link text-white">Home</Link>
          </li>
          {
            !userdet.role && <>
                <li className="nav-item">
                  <Link to ='/login' className="nav-link text-white">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to ='/register' className="nav-link text-white">Register</Link>
                </li>
            </>
          }
          {
             userdet.role && <>
                <li className="nav-item">
                <Link to ='/houses' className="nav-link text-white">Flats</Link>
                </li>
            </>
          }
          {
             userdet.role=="5" &&
             <>
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
          {
            userdet.phone && <>
                <li className="nav-item">
                  <a className="nav-link text-white" onClick={()=>logoutUser()}> Logout </a>
                </li>
                <li className="nav-item">
                  <Link to ='/wishlist' className="nav-link text-white">Wish List</Link>  
                </li>
                
            </>
          }

        </ul>
      
      </div>
    </nav>
  </div>
   
  )
}

export default Nav
