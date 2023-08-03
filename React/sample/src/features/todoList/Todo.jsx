import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from './todoSlice'
function Todo() {
  var {tasks}=useSelector(state=>state.todo)
  console.log(tasks)
  var [newtask,setNewtask]=useState('')
  const dispatch = useDispatch()
  return (
    <div className='border border-danger border-3  pb-5'>
      <h3> Todo List</h3>
      <input type='text' id='newtask' onChange={(e)=>{setNewtask(e.target.value)}}/> &nbsp;&nbsp;&nbsp;
      <button onClick={()=>{
           dispatch(addTodo(newtask));
         document.getElementById('newtask').value=''
        }}>Add</button>
        <br/><br/>
      { 
        tasks.map((e,i)=>
          <li key={i} className='my-2'>
            {e} &nbsp; &nbsp;
            <button onClick={()=>{dispatch(deleteTodo(i))}}>Delete</button>
          </li>

        )
      }
    </div>
  )
}

export default Todo
