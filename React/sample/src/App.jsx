import './App.css'
import React, { useState,useRef } from 'react';
import ShowTasks from './ShowTasks';
function App() {
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
var [errmsg,setErrmsg]=useState('');
function addTask(e){
  e.preventDefault()
  if(document.myform.taskname && document.myform.status.value ){
    ar.push({
      title: document.myform.taskname.value,
      status: document.myform.status.value
    });
    setAr([...ar]);
    document.myform.reset();
    setErrmsg('')
  }
  else{
     setErrmsg('Please fill task and status')
  }
  console.dir(document.myform)
}
  return (
    <div >
      <br/>
      <form name='myform'>
          Task :  &nbsp;
          <input type='text' name='taskname' placeholder='Enter task'/><br/><br/>
          Status:  &nbsp;
          <input type='radio'  name='status' value='complete'/> &nbsp;Completed &nbsp; &nbsp; &nbsp;
          <input type='radio' name='status'  value='incomplete'/> &nbsp; Not Completed<br/><br/>      
          <button onClick={addTask}>Add Task</button>
          <div>{errmsg}</div>
          <br/>
      </form>
     
      <ShowTasks ar={ar}></ShowTasks>
      </div>
  );
}
export default App;