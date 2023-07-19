import React from 'react'
function PropsObj(props){
    console.log(props.ob.team)
    
    return(
        <div>
           
            <div className='team_box'>
                <h3>{props.ob.team}</h3>
                <ul>
                {
                    props.ob.players.map((e,i)=>
                     <li>{e}</li>   
                    )
                }
                </ul>
            </div>
        </div>
    )
}
export default PropsObj