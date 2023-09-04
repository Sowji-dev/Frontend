import React, { useEffect, useState } from 'react'
import { useGetCustDetailsQuery,useDeleteStudentMutation,useLazyGetCustDetailsQuery } from '../services/custList'
import ShowDetails from './ShowDetails'
function CustList() {
 var  {isLoading, isError, data}= useGetCustDetailsQuery()
 var [deletefn]=useDeleteStudentMutation()
 var [lazyGetList]=useLazyGetCustDetailsQuery()
var [details,showDetails]= useState()
var [status,setStatus]=useState('')
var [search, setSearch]=useState('')
var [searchAr,setsearchAr]=useState([])
var [custData,setcustData]=useState([])

function showCust(details){
  console.log(details)
  showDetails({...details})
}
 function deleteCust(e){
      if (window.confirm(`Do you want to delete ${e.fullname}'s details`)) {
        deletefn(e.id).then(res=>{
          if(res.data){
            lazyGetList() 
            alert('Deleted Successfully')
          }
          if(res.error) 
          alert('something went wrong...')
        })
      }   
 }
 function searchCust(e){
    setSearch(e);
    // data.forEach(e => {
    //   console.log()
    //   if(JSON.stringify(e).search(search)!=-1){
    //     searchAr.push(e)
    //     console.log(e)
    //   }
    // })
    // setcustData([...searchAr])
 }
  return (
    <div className='d-flex  clist'>
      <div className='w-50'>
        { isLoading && <h3>Loading..</h3> }
          {
          ( !isLoading && !isError ) &&
          <div>
              <h3 className='custhd'>Existing Customers List</h3>
              <input type="text" className='search' placeholder="Search" onKeyUp={(e)=>searchCust(e.target.value)}></input>
              {data.map(e=>
              <div  key={e.id}>
                {
                  (JSON.stringify(e).search(search)!=-1) ? 
                  <div>
                      <span className='cname'onClick={()=>{showCust(e)}}>{e.fullname} - {e.phone}</span> &nbsp;
                    <button onClick={()=>{deleteCust(e)}}>Delete</button>
                  </div>
                  : ''
                }
                    
              </div>
              )}
           </div>    
        }
      </div>
      <div className='w-50'>
       {
        details && <ShowDetails details={details}></ShowDetails>
       } 
      </div>
    </div>
  )
}

export default CustList
