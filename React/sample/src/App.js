import './App.css'
import React from 'react';
import { useState } from 'react';
function App() {
  var [ar,setAr]=useState([1,2,3])
  var [br,setBr]=useState([4,5,6])
  var r;
  function clicked(i,a){
    if(a=='ar'){
      r=ar.splice(i,1)
      setBr([...br,r])
    }
    else{
      r=br.splice(i,1)
      setAr([...ar,r])
    }
  }
  return (
    <div style={{display:'inline-flex'}}>
      <div className='boxO'>
        {
            ar.map((e,i,arr)=>
              <li onClick={()=>{clicked(i,'ar')}}>Task {e}</li>
          )
        }
      </div>
      <div  className='boxG'>
        {
          br.map((e,i,array)=>
            <li onClick={()=>{clicked(i,'br')}}>Task {e}</li>
          )
        }
      </div>
      </div>
  );
}
export default App;