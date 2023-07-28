import './App.css'
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik'
function App() {
  var ref1=useRef('0')
  var ref2=useRef('0')
  var [res,setRes]=useState(0)
  function operate(op){
   var n1= ref1.current.value
   var n2= ref2.current.value
    if(/^[0-9]+$/.test(n1) && /^[0-9]+$/.test(n2)){
        var exp=n1+op+n2
       setRes(eval(exp))
    }
    else
      setRes('Please provide numeric values')
  }
  function clearVal(){
    ref1.current.value=''
    ref2.current.value=''
    setRes('')
  }
  return (
    <div >
        <h3>Calculator App</h3>

        <input type='text' ref={ref1} />&nbsp;
        <input type='text' ref={ref2} />
        <br/>
        {
          res? <h3>Result: <b>{res}</b></h3> : ''
        }
        <div>
          <button onClick={()=>operate('+')}>Add</button> &nbsp;
          <button onClick={()=>operate('-')}>Subtract</button>&nbsp;
          <button onClick={()=>operate('*')}>Multiply</button>&nbsp;
          <button onClick={()=>operate('/')}>Division</button>&nbsp;
          <button onClick={()=>operate('**')}>Power</button>&nbsp;
          <button onClick={clearVal}>Clear values</button>&nbsp;
        </div>
      </div>
  );
}
export default App;