import './App.css'
import React, { useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';
import axios from 'axios'
function App() {
  var [ar,setAr]=useState([])
  var [json, setJson]= useState('')
  var [form,setForm]=useState({
    // id: '',
    name: '',
    addr: ''
  })
  useEffect(()=>{
    axios.get('http://localhost:3000/stud').then(res=>{
      console.log(res.data);
      setAr(res.data)
      console.log('useeff method')
    })
  }, [json])
 
  
  function add(){
    setForm({...form})
    console.log(form)
    axios.post('http://localhost:3000/stud  ',form)
        .then(res => console.log(res));
        setJson(ar.length)
  }
  return (
    <div >
        <h4>hii</h4>
       
          {/* <input type='number' name='empid' placeholder='enter id'/> */}
          <br/><br/>
          <input type='text' onChange={(e)=>{
              setForm({...form,name:e.target.value})
            }}  placeholder='enter name'/><br/><br/>
          <input type='text' onChange={(e)=>{
              setForm({...form,addr:e.target.value})
            }} placeholder='enter address'/><br/><br/>
          <button type='submit' onClick={add}>Add</button>
        
        <div>
        {
          ar.map((e,i)=>
             <div key={e.id}>{e.id}. {e.name} , {e.addr}</div>
          )
        }
        </div>
        
      {/* <h4>{JSON.stringify(ar)}</h4> */}
      </div>
  );
}
export default App;