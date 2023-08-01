import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function ProdDetails() {
    var p=useParams()
    console.log(p)
    var [prod,setProd]=useState({})
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${p.pid}`).then(res=>{
            setProd(res.data)
            console.log(res.data)
        })
       // console.log(prod)
    },[p])
  return (
    <div style={{border:'2px solid',padding:'15px  '}}>
        {prod.title}
         <img src={prod.image}/>
      {prod.description}
      <div>Price: {prod.price}</div>
    
    </div>
  )
}

export default ProdDetails
