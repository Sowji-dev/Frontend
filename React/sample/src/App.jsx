import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Drink from './Drink';
function App() {
  var [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then(res=>{
      console.log(res.data.drinks)
      setData([...res.data.drinks])
    })
  },[])
  return (
    <div >
      <h4>Cocktails</h4>
      {
        data.map((e,i)=>
         <Drink key={i} data={e}></Drink>
        )
      }
    </div>
  );
}
export default App;