import './App.css'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
  var [ar,setAr]=useState([
    {
        title:'Groceries',
        status:false,
        uid:uuidv4() 
    },
    {
        title:'House rent',
        status:true,
        uid:uuidv4()
    },
    {
        title:'Bike EMI',
        status:false,
        uid:uuidv4()
    },
    {
      title:'Tution fee',
      status:true,
      uid:uuidv4()
    },
    {
      title:'Electricity',
      status:false,
      uid:uuidv4()
    }
])
  
function addTask(e){
  e.preventDefault()

    ar.push({
      title: document.myform.taskname.value,
      status: false,
      uid:uuidv4()
    });
    setAr([...ar]);
   
}
console.log(ar)
  return (
    <div >
      App comp
      <form name='myform'>
      Task :  &nbsp;
          <input type='text' name='taskname' placeholder='Enter task'/>&nbsp; &nbsp; &nbsp;
          <button onClick={addTask}>Add Task</button>
          {
            ar.map(e=>{
             return <li>{e.title} - {e.uid}</li>
            })
          }
        </form> 
      </div>
  );
}
export default App;