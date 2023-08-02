import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Countries() {
  var [cntry,setCntry]=useState([]);
  useEffect(()=>{
      axios.get('https://restcountries.com/v2/all').then((res)=>{
      setCntry(res.data)
      console.log(res)
      })
  },[])
  return (
    <div>
        <div className='box'>
          <Outlet></Outlet>
          </div>
            {
          cntry.map((e,i)=>
              <div key={i}>
              <Link to={`/countries/countryinfo/${e.alpha2Code}`}>{e.name}</Link>
              </div>
          )
        }
        <Outlet></Outlet>
    </div>
  )
}

export default Countries
