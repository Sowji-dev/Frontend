import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
function Countries() {
    var [cntry,setCntry]=useState([]);
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
    <div  className='boxbord'>
      {
        cntry.map((e,i)=>
            <div>{e.name.common} </div>
        )
      }
    </div>
  )
}

export default Countries
