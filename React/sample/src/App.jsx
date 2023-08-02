import './App.css'
import React, { useState,useRef, useEffect } from 'react';
import ShowTasks from './ShowTasks';
function App() {
  var [ar,setAr]=useState([
    {
        title:'Groceries',
        status:false
    },
    {
        title:'House rent',
        status:true
    },
    {
        title:'Bike EMI',
        status:false
    },
    {
      title:'Tution fee',
      status:true
    },
    {
      title:'Electricity',
      status:false
    }
])
var [errmsg,setErrmsg]=useState('');
var [showOnly,setShowOnly]=useState('all')
function addTask(e){
  e.preventDefault()
  if(document.myform.taskname.value ){
    ar.push({
      title: document.myform.taskname.value,
      status: false
    });
    setAr([...ar]);
    document.myform.reset();
    setErrmsg('')
  }
  else{
     setErrmsg('Please fill task and status')
  }
}
function toggleTask(item){
  var tog_ind
  ar.filter((e,i)=>{
    if(e.title==item.title){
      tog_ind = i
    }
  })
  console.log('tog_ind is',tog_ind)
    ar[tog_ind].status=!ar[tog_ind].status;
    setAr([...ar])
}
function deleteTask(item){
  var del_index;
  ar.filter((e,i)=>{
    if(e.title==item.title){
      del_index= i
    }
  })
  ar.splice(del_index,1)
  setAr([...ar])
}
useEffect(()=>{
  document.myform.status[0].checked=true
},[])
function changeRadio(){
  console.dir(document.myform.status)
  setShowOnly(document.myform.status.value)
}
  return (
    <div >
      <br/>
      <form name='myform'>
          Task :  &nbsp;
          <input type='text' name='taskname' placeholder='Enter task'/>&nbsp; &nbsp; &nbsp;
          <button onClick={addTask}>Add Task</button>
          <br/><br/>
          <div onChange={changeRadio}>
              <input type='radio'  name='status' value='all' /> &nbsp;All &nbsp; &nbsp; &nbsp;
              <input type='radio'  name='status' value='true'/> &nbsp;Completed &nbsp; &nbsp; &nbsp;
              <input type='radio' name='status'  value='false'/> &nbsp; Not Completed<br/><br/> 
          </div>
          <div>{errmsg}</div>
          <br/>
      </form>
     
      <ShowTasks ar={ar} toggleTask={toggleTask} deleteTask={deleteTask} showOnly={showOnly} ></ShowTasks>
      </div>
  );
}
export default App;