import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
    console.log('counter: ',props)
  return (
    <div className='box'>
      <h3>Count:{props.counterR.count}</h3>
      <button onClick={()=>props.dispatch({type:'inc'})}>Increment</button>&nbsp;&nbsp;&nbsp;
      <button  onClick={()=>props.dispatch({type:'dec'})}>Decrement</button>&nbsp;&nbsp;&nbsp;
      <button  onClick={()=>props.dispatch({type:'reset'})}>Reset</button>&nbsp;&nbsp;&nbsp;
      <br/>
    </div>
  )
}

export default connect(store=>store)(Counter)
