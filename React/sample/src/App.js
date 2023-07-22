import './App.css'
import React, { useState } from 'react';
import Trips from './Trips'
import { useEffect } from 'react';
import axios from 'axios';
function App() {
 var [trips,setTrips]=useState([])
 var load='Loading'
  useEffect(()=>{
    axios.get('https://course-api.com/react-tours-project').then((res)=>{
      setTrips(res.data);
      load=''
    })
  },[])
  function remov(i){
    trips.splice(i,1)
    setTrips([...trips])
  }
  return (
    <div className='box'>
      
      {
        trips.length!=0?
          <div><div className='tours'>Our Tours<div></div></div>
          {
            trips.map((e,i)=>
              <div key={i}><Trips t={e} i={i} remov={remov}></Trips></div>
            )
          }</div>
        :
        <div className='load'>{load}...</div>
      }
      </div>
  );
}
export default App;