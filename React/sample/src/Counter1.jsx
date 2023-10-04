import React, { useState } from 'react'
import useCounter from './useCounter'

function Counter1() {
    // const [c,setC]=useState(0)
    // function incr(){
    //     setC(c+1)
    // }
    // function decr(){
    //     setC(c-1)
    // }
    var [c,incr,decr]=useCounter(0,1)
  return (
    <div>
       <h4>Count={c}</h4> 
       <button onClick={incr}>Increment</button>
       <button onClick={decr}>Decrement</button>
    </div>
  )
}

export default Counter1
