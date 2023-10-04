import React, { useState } from 'react'
import useCounter from './useCounter'

function Counter2() {
    // const [c,setC]=useState(10)
    // function incr(){
    //     setC(c+5)
    // }
    // function decr(){
    //     setC(c-5)
    // }
    var [c,incr,decr]=useCounter(10,5)


  return (
    <div>
        <h4>Count={c}</h4> 
        <button onClick={incr}>Increment</button>
        <button onClick={decr}>Decrement</button>
    </div>
  )
}

export default Counter2
