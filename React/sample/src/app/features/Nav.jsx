import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { logout } from '../slice/loginSlice';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
function Nav() {
    var userdet=useSelector(state=>state.loginSlice.userdet)
    var dispatch=useDispatch()
  console.log(userdet)
  const nav = useNavigate();
  const location = useLocation().pathname;
 
  console.log(location);
  function logoutUser(){
    dispatch(logout())
    nav("/");
  }
  
  return (
    <div className='d-flex'>
    <div className='logo'>
      <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnK1lw_-yUZu7nJoQcb6Ea7rfm7ANRFBzcQ&usqp=CAU'/>
    
    </div>
    <nav className="navbar navbar-expand-lg  bg-orange bg-gradient">
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link to ='/'  className={location=='/'? 'nav-link nav_act' : 'nav-link'} >Home</Link>
          </li>
          {
            !userdet.role && <>
                <li className="nav-item">
                  <Link to ='/login' className={location=='/login'? 'nav-link nav_act' : 'nav-link'} >Login</Link>
                  <span></span>
                </li>
                <li className="nav-item">
                  <Link to ='/register'  className={location=='/register'? 'nav-link nav_act' : 'nav-link'} >Register</Link>
                  <span></span>
                </li>
            </>
          }
          {
             userdet.role && <>
                <li className="nav-item">
                <Link to ='/houses'  className={location=='/houses'? 'nav-link nav_act' : 'nav-link'}  >Flats</Link>
                <span></span>
                </li>
            </>
          }
          {
             userdet.role=="5" &&
             <>
                <li className="nav-item">
                  <Link to ='/addcust' className={location=='/addcust'? 'nav-link nav_act' : 'nav-link'} >Add Customer</Link>
                  <span></span>
                </li>
                <li className="nav-item">
                  <Link to ='/property'  className={location=='/property'? 'nav-link nav_act' : 'nav-link'} >Add Property</Link>  
                  <span></span>
                </li>
                <li className="nav-item">
                  <Link to ='/custlist'  className={location=='/custlist'? 'nav-link nav_act' : 'nav-link'} >Customer List</Link> 
                  <span></span> 
                </li>
            </>
          }
        
          <li className="nav-item">
            <Link to ='/projects'  className={location=='/projects'? 'nav-link nav_act' : 'nav-link'} >Projects</Link>
            <span></span>
          </li>
          <li className="nav-item">
            <Link to ='/about'  className={location=='/about'? 'nav-link nav_act' : 'nav-link'} >About Us</Link>
            <span></span>
          </li>
          {
            userdet.phone && <>
            <li className="nav-item">
                  <Link to ='/wishlist'   className={location=='/wishlist'? 'nav-link nav_act' : 'nav-link'} >Wish List</Link>  
                  
                </li>
                <li className="nav-item">
                  <a  className={location=='/login'? 'nav-link nav_act' : 'nav-link'}  onClick={()=>logoutUser()}> Logout </a>
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
