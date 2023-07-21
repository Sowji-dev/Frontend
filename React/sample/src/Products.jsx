import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
function Products() {
    var [prod,setProd]=useState([]);
    useEffect(()=>{
        console.log('Products use effect with empty DA')
        axios.get('https://fakestoreapi.com/products').then((res)=>{
        setProd(res.data)
        })
    },[])
    useEffect(()=>{
        console.log('Products use effect with no DA')
    })
  return (
    <div className='boxbord'>
      {
        prod.map((e,i)=>
            <div>{e.title} </div>
        )
      }
    </div>
  )
}

export default Products
