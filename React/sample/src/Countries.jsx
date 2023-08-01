import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function Countries() { var [cntry,setCntry]=useState([]);
  useEffect(()=>{
      console.log('Countries use effect with empty DA')
      axios.get('https://restcountries.com/v3/all').then((res)=>{
      setCntry(res.data)
      })
  },[])
  useEffect(()=>{
      console.log('Countries use effect with no DA')
  })
return (
  <div  className='box'>
    {
      cntry.map((e,i)=>
          <div>
            <Link to='/details'>{e.name.common}</Link> 
          </div>
      )
    }
    <Outlet></Outlet>
  </div>
)
}

export default Countries

