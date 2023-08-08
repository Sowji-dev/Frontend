import React, { useState } from 'react'
import { useGetProductsQuery } from '../../../services/productsApi'
import ProdDetails from './ProdDetails'

export default function Products() {
  const {isLoading, isError , data} = useGetProductsQuery('')
  var [prodid,setProdid]=useState('')
  return (
    <div className='d-flex'>
        <div className='' style={{textAlign:'left',border:'none',padding:'20px  '}}>
            {isLoading ? 
            <h3>Loading</h3>
            :
              
                data.map((e,i)=>
                    <div key={i}>
                      <h4 onClick={()=>{setProdid(e.id)}}>{i+1}. {e.title}</h4>
                    </div>

                )
          }
        </div>
      {prodid && <div> 
          <ProdDetails prodid={prodid}></ProdDetails>
        </div>}
     
   
    </div>
    
  )
}

