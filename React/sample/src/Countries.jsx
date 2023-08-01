import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function Countries() { 
  var [cntry,setCntry]=useState([]);
  useEffect(()=>{
      axios.get('https://restcountries.com/v2/all').then((res)=>{
      setCntry(res.data)
      console.log(res)
      })
  },[])
return (
  <div  className='box'>
    {
      cntry.map((e,i)=>
          <div key={i}>
            <Link to={'/details/'+e.alpha2Code}>{e.name}</Link> 
          </div>
      )
    }
    <Outlet></Outlet>
  </div>
)
}

export default Countries

