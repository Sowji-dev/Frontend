import React from 'react'

function Loading(props) {
  return (
    <div>
       <h1> No Tours Left</h1><br/>
        <button className='refr' onClick={props.refresh}>Refresh</button>
    </div>
  )
}

export default Loading
