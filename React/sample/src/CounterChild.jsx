import React, { useContext } from 'react'
import myContext from './myContext'

function CounterChild() {
    var count=useContext(myContext)
  return (
    <h3>count is : {count}
    </h3>
  )
}

export default CounterChild
