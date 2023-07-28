import './App.css'
import React, { useState,useRef } from 'react';
import ShowTasks from './ShowTasks';
function App() {
  var refTask=useRef('')
  var refStatus=useRef('')
  var [ar,setAr]=useState([
    {
        title:'car wash',
        status:'incomplete'
    },
    {
        title:'insuarance payment',
        status:'complete'
    },
    {
        title:'rent',
        status:'incomplete'
    }
])
function addTask(){
  ar.push({
    title:refTask.current.value,
    status:refStatus.current.value
  })
  setAr([...ar])
  console.log(ar)
}
  return (
    <div >
      <input type='text' ref={refTask} placeholder='Enter task'/>
      <input type='text' ref={refStatus} placeholder='Enter status'/>
      Status:
      <inpu type='radio' name=''/>
      <button onClick={addTask}>Add Task</button>
      <ShowTasks ar={ar}></ShowTasks>
      </div>
  );
}
export default App;