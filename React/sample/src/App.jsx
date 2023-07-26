import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Drink from './Drink';
import $ from "jquery"
function App() {
  var [data,setData]=useState([]);
  var [temp,setTemp]=useState([]);
  var [nosearch,setNosearch]=useState('')
  useEffect(()=>{
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then(res=>{
      //console.log(res.data.drinks)
      setTemp([...res.data.drinks])
      setData([...res.data.drinks])
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
      <h4>Cocktails</h4>
      <div class="container">
  <h2>Modal Example</h2>
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
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
  );
}
export default App;