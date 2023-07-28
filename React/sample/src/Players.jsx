import React from 'react'

function Players(props) {
    console.log(props)
  return (
    <div  className={props.clas}>
      <h3>Team {props.teamName}</h3>
        <ul>
          <div>{props.ar.length ==0 ? 'No players selected' : '' }</div>
      {
        props.ar.map((e,i)=>{
            return <li key={i} onClick={()=>props.changeTeam(i,props.teamName)}>{e}</li>
        })
     }
      </ul>
    </div>
  )
}

export default Players
