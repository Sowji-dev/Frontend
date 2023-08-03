import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './counterSlice'
function Counter() {
  var count=useSelector((state)=>state.counter.c)
  const dispatch = useDispatch()
  console.log(count)
  return (
    <div className='border border-success border-3  pb-5'>
      <h3>
        Counter:{count}
      </h3>
      <button onClick={()=>dispatch(increment() )}>Increment</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>dispatch(decrement() )}>Decrement</button>

    </div>
  )
}

export default Counter
