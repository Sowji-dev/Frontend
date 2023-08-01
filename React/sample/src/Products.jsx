import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function Products() {
    var [ar,setAr]=useState([])
    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')  .then(res=>{
        setAr(res.data)
        console.log(res.data)
      })
    },[])
  return (
    <div className='flex'>
         <div>
            {
                ar.map((e,i)=>
                    <li key={e.id}>
                        <Link to={'ProdDetails/'+e.id}>{e.title}</Link>
                    </li>
                )
            }
        </div> 
        <div>
            <Outlet></Outlet>
        </div>
       
  
    </div>
  )
}

export default Products
