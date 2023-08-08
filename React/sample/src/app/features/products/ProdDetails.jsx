import React from 'react'
import { useGetProductDetailsQuery } from '../../../services/productsApi'
function ProdDetails(props) {
   var {data}= useGetProductDetailsQuery(props.prodid)
   console.log(data)
  return (
   
        <div >
             {data && 
                <div className='prod_box'>
                    <h3>{data.title}</h3>
                    
                    <br/>
                    <img src={data.image}/>
                    <h3>$ {data.price}</h3>
                    <div>{data.description}</div>
                </div>
            }
        </div>
    
  )
}

export default ProdDetails
