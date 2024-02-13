import React, { useContext } from 'react'
import myContext from './myContext'

function Child() {
    var mydata=useContext(myContext)
    console.log(mydata)
  return (
    <h4 style={{border:"2px solid black"}}>
      Data passed using useContext hook is: 
      {mydata}
    </h4>
  )
}

export default Child
