import React, { useState } from 'react'
import { connect } from 'react-redux'

function Todo(props) {
     console.log('todo ',props.todoR.todo)
    var [newtodo,SetNewtodo]=useState('')
  return (
    <div className='box'>
        <input type='text' onKeyUp={(e)=>{SetNewtodo(e.target.value)}}/>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>props.dispatch({type:'add',payload:newtodo})}>Add</button>
        <ul>
        {
            props.todoR.todo.map((e,i)=>
                <li key={i}>{e}&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>{props.dispatch({type:'delete',ind:i})}}>Delete</button>
                </li>
            )
        }
        </ul>
      
    </div>
  )
}

export default connect((store=>store))(Todo)
