import React, { useState } from 'react'
import CounterChild from './CounterChild'
import myContext from './myContext'

function Counter() {
    var [c,setC]=useState(0)
  return (
    <myContext.Provider value={c}>
    <div  style={{border:"2px solid black", width:"50%",margin:"30px auto"}}>
        <br/><br/><CounterChild></CounterChild>
      <button onClick={()=>{setC(c+1)}}>Increment</button><br/><br/>
      <button onClick={()=>{setC(c-1)}}>Decrement</button><br/>
     
    </div>
    </myContext.Provider>
  )
}

export default Counter
