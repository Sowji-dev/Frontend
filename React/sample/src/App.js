import './App.css'
import React from 'react';
import TodoProps from './Todo_props'
import { useState } from "react"
function App() {
  var [ar,setAr]=useState([
    {
      task:'Groceries',
      paid:'false'
    },
    {
      task:'Water bill',
      paid:'false'
    },
    {
      task:'Tution fee',
      paid:'false'
    },
    {
      task:'House Rent',
      paid:'false'
    },
    {
      task:'Electricity',
      paid:'false'
    }
  ]);
  function addTask(t){
    ar.push({
      task:t,
      paid:'false'
    });
    setAr([...ar])
  }
  function done(i){
    ar[i].paid=true
    setAr([...ar])
  }
  function clear(i){
    ar.splice(i,1);
    setAr([...ar])

  }
  return (
    <div  className="todo">
      <h2>TODO LIST</h2>
      <TodoProps ar={ar} addTask={addTask} done={done} clear={clear}></TodoProps>
      </div>
  );
}
export default App;