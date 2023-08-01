import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

function CountryDetails() {
    var params=useParams()
    //console.log(c)
    var [cntry,setCntry]=useState({});
    //var numcid=+c.cid;
    useEffect(()=>{
        axios.get(`https://restcountries.com/v2/alpha/${params.cid}`).then(res=>{
            //console.log(res);
            //https://restcountries.com/v2/alpha/
            setCntry(res.data)
        })
        console.log(cntry)
    },[])
  return (
    <div  className='box'>
      <div>
        <h4>Country details</h4>
        <div>{cntry.name}</div>
        <div>{cntry.capital}</div>
        <img src={cntry.flag}/>
      </div>
    </div>
  )
}

export default CountryDetails
