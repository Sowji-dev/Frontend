import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
  return (
    <div className='box'>
    <h4> Our Services </h4>
    <ul>
        <Link to='/reactspa'> 
            <li>Single Page Web Application Development using React</li>
        </Link>
        <Link to='/angspa'> 
            <li>Single Page Web Application Development using Angular</li>
        </Link>
    </ul>
    <Outlet></Outlet>
    </div>
  )
}

export default Services
