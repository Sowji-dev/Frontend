import './App.css'
import React, { useState } from 'react';
import Trips from './Trips'
import { useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
function App() {
 var [trips,setTrips]=useState([])
 var [show,setShow]=useState(false)
 var [refr,setRefr]=useState(false)
 var [showtrips,setShowtrips]=useState(false)
  useEffect(()=>{
    axios.get('https://course-api.com/react-tours-project').then((res)=>{
      console.log(trips)
      setTrips(res.data);
      setShow(true)
    })
  },[showtrips])
  function remov(i){
    trips.splice(i,1)
    setTrips([...trips])
    if(trips.length==0) 
    setRefr(true) 
  }
  function refresh(){
    setShowtrips(!showtrips)
    setRefr(false)
    setShow(false)
  }
  return (
    <div className='box'>
       {
        show?
          <div>
              {trips.length ? <div className='tours'>Our Tours<div></div></div> 
              :
              <div>
                <Loading refresh={refresh}></Loading>
              </div>
              }
              {
                trips.map((e,i)=>
                  <div key={i}><Trips t={e} i={i} remov={remov}></Trips></div>
                )
              }
          </div>
        :
        <div className='load'>Loading...</div>
        }
    </div>
  );
}
export default App;