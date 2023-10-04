import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useGetUrlData from './useGetUrlData'

function Products() {
    var data=useGetUrlData( 'https://fakestoreapi.com/products')
    console.log(data)
   
  return (
    <div>
        <br/>
       {
      data.map(e=>{
        return <span>{e.price}---</span>
      })
    }
    <br/><br/>
    </div>
  )
}

export default Products
