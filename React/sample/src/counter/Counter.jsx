import React, { useState } from 'react'

function Counter() {
    const [c,setC]=useState(0);

  return (
    <div>
      <h3>Count:{c}</h3>
      <button onClick={()=>setC(c+1)}>Increment</button>
    </div>
  )
}

export default Counter
