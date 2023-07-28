import React from 'react'

function ShowTasks(props) {
  return (
    <div>
        <ul>
            {props.ar.map((e,i)=>{
                return <li>{e.title}</li>
            })}
        </ul>
      
    </div>
  )
}

export default ShowTasks
