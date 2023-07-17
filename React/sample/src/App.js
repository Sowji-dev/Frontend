import './App.css'
import React from 'react';
import { useState } from 'react';
function App() {
  var [x,setX]= useState('')
  var a,b,c,op;
  function clicked(e){
    setX(document.myForm.country.value)
  }
  


  return (
    <div >
      <div style={{width:'300px',height:'200px', border:'2px solid'}}>
        <form name='myForm'>
          Color
           <input name='country' type='radio' value='India' onChange={clicked}/>IND
           <input name='country' type='radio' value='United State of America'  onChange={clicked}/>USA
           <input name='country' type='radio' value='United Kingdom'  onChange={clicked}/>UK
        </form>
         
         <h1>{x}</h1>
      </div>
      </div>
  );
}
export default App;