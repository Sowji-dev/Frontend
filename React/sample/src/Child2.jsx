import React, { createContext } from 'react'
import myContext from './myContext'

function Child2() {
    //other way of usecontext(it is complex so prefer child.jsx)
  return (
    <myContext.Consumer >
        {
            (mydata)=>{
                return <div  style={{border:"2px solid black"}}>
                    <h3>data is {mydata}</h3>
                </div>

            }
        }
     </myContext.Consumer>
        

  )
}

export default Child2
