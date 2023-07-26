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
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
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