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
      {/* <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnK1lw_-yUZu7nJoQcb6Ea7rfm7ANRFBzcQ&usqp=CAU'/> */}
    <img src='data:image/jpeg;base64,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'/>
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
