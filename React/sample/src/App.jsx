import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import News from './News';
function App() {
  var [ar,setAr]=useState([])
  useEffect(()=>{
    axios.get('https://hn.algolia.com/api/v1/search?').then(res=>{
      console.log(res.data)
      //setAr([...res.data])
    })
  },[])
  return (
    <div >
      <h3>News App</h3>
      {/* {ar.length}
      {
        ar.map((e,i)=>
             <News key={i} ar={e}></News>   
        )
      } */}
      </div>
  );
}
export default App;