import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
function Trips(props) { 
  var {i=props.i, t=props.t}=props;
  var [rm,setRm]=useState(true)
  var [rl,setRl]=useState(false)
  function readMore(){
    setRm(false)
    setRl(true)
    console.log(rm)
  }
  function readLess(){
    setRm(true)
    setRl(false)
  }

  console.log(props)
  return (
    <div  className='boxbord'>
      <div className='imag'><img src={t.image} /></div>
      <div className='tourBox'>
        <div className='tourhead'>{t.name}
          <span>${t.price}</span>
        </div>
        <div class='tourtext'>
            {
              rl ? t.info : (t.info.substring(0,200) + '...' )
            }
            {rm? <span className='more' onClick={readMore}>Readmore</span> : ''}
            {rl? <span  className='more' onClick={readLess}>ReadLess</span> : ''}
         </div>
          <button onClick={()=>{props.remov(i)}}>Not Interested</button>
      </div>
      
    </div>
  )
}

export default Trips
