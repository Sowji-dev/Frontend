import React, { useState } from 'react'
import { useGetAllCountriesQuery, useLazyGetCountriesByNameQuery } from '../../../services/countreiesApi'

function Countries() {
    var {isLoading, isError, data}=useGetAllCountriesQuery()
    var [cname, setCname]=useState('')
    var [cdetails, setCdetails]=useState({})
    var[getEachCountryDetails]= useLazyGetCountriesByNameQuery()
 
    function getCountryDetails(cname){
        //console.log(cname)
        getEachCountryDetails(cname).then(res=>{
             setCdetails({...res.data})

            console.log(cdetails)
        //    res.data.map(e=>{
        //     console.log(e.name.common)
        //    })
        });
    }
  return (
    <div>
        {
            cdetails ? <div>    
                {/* {JSON.stringify(cdetails['0'].name.common)} */}
               
            </div> : 'country details not found'
        }
        {
            isLoading ? 'Loading' :
            data.map((e,i)=>
            <div>
                <div onClick={()=>{
                    setCname(e.name.common);
                    getCountryDetails(cname)
                }}>{e.name.common }</div>
            </div>
        )
        }
      
    </div>
  )
}

export default Countries
