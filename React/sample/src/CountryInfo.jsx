import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
function CountryInfo() {
    var params=useParams()
    var [cntry,setCntry]=useState({});
    console.log(params)
    useEffect(()=>{
        axios.get(`https://restcountries.com/v2/alpha/${params.code}`).then(res=>{
             setCntry(res.data)
        })
        console.log(cntry)
    },[params])
  return (
    <div >
        <h4>Country details</h4>
        <div>{cntry.name}</div>
        <img src={cntry.flag} style={{width:'100px'}}/>
        <div>Capital: {cntry.capital}</div>
       <div>Population: {cntry.population}</div>
    </div>
  )
}

export default CountryInfo
