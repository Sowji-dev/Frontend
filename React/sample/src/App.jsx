import './App.css'
import React, { useRef } from 'react';
function App() {
  var ref1=useRef('')
  var ref2=useRef('')
  var ref3=useRef('')
  var ref4=useRef('')
  var refbtn=useRef('')
  function handlename(e){
    if(e.key=='Enter')  
       ref2.current.focus() 
    console.dir(ref2.current)
  }
  function handleAge(e){
    if(e.key=='Enter')  
    ref3.current.focus() 
  }
  function handleCity(e){
    if(e.key=='Enter')  
    ref4.current.focus() 
  }
  function handleEmail(e){
    if(e.key=='Enter')  
    refbtn.current.focus() 
  }
  return (
    <div >
        <h4>Changing Focus to Next Input using useRef hook</h4>   
        Name:
        <input type ='text' ref={ref1} onKeyUp={handlename}/><br/><br/>
        Age:
        <input type ='number' ref={ref2} onKeyUp={handleAge}/><br/><br/>
        City:
        <input type ='text' ref={ref3} onKeyUp={handleCity}/><br/><br/>
        email:
        <input type ='email' ref={ref4} onKeyUp={handleEmail}/><br/><br/>
        <button type='submit' ref={refbtn}>Submit</button>
      </div>
  );
}
export default App;