import './App.css'
import React from 'react';
import { useState } from 'react';
function App() {
  var d=new Date()
  var [time,setTime]=useState();
  var t=d.getHours()+' : '+ d.getMinutes()+' : '+ d.getSeconds()
  setInterval(()=>{
    setTime(t)
  }, 1000)
  return (
    <div >
     {time}
    </div>
  );
}
export default App;