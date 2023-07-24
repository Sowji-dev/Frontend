import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import News from './News';
function App() {
  var [ar,setAr]=useState([])
  useEffect(()=>{
    axios.get('https://hn.algolia.com/api/v1/search?').then(res=>{
      console.log(res.data.hits)
      setAr([...res.data.hits])
    })
  },[])
  return (
    <div >
      <h3>News App</h3>
      {
        ar.map((e,i)=>
          <div>
             <News d={e}></News>
          </div>
        )
      }
      </div>
  );
}
export default App;