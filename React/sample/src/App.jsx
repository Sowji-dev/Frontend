import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Drink from './Drink';
import $ from "jquery"
function App() {
  var [data,setData]=useState([]);
  var [temp,setTemp]=useState([]);
  var [nosearch,setNosearch]=useState('')
  var [showload,setShowLoad]=useState(true)
  useEffect(()=>{
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then(res=>{
      //console.log(res.data.drinks)
      setTemp([...res.data.drinks])
      setData([...res.data.drinks])
      setShowLoad(false)
    })
  },[])
  
  function search(){
    var s=document.getElementById('search').value
    console.log(temp)
    data=[]
    setNosearch('')
    setData(data)
    if(s==''){
      setData([...temp])
      console.log('empty srch',data)
    }
    else{
      temp.map((e,i)=>{
        if(e.strDrink.toLowerCase().search(s.toLowerCase())!=-1){
          data.push(e)
          setData([...data])
        }
      })
      console.log(data.length)
      if(data.length==0)
        setNosearch('No Cocktails Matched Your Search Criteria')
    }

  }
  function showDrink(i){
    console.log('show drink:',temp[i])

   
  }
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  return (
    <div >
      {showload?
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'/>
        :
          <div>
            <h4>Cocktails</h4>
            <div className='search'>
              <input type='text' id='search' onKeyUp={search}/>
            </div>
            <div>{nosearch}</div>
            {
              data.map((e,i)=>
              <Drink i={i} data={e} showDrink={showDrink}></Drink>
              )
            }
          </div>        
          }
    </div>
  );
}
export default App;