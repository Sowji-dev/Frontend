import React, { useState } from 'react'


function AboutUs() {
  var [bord,setBord]=useState(false)
  function onmouseover(){
    console.log('dfs')
    setBord(!bord)
  }
  function onmouseleave(){
    console.log('dfs')
    setBord(false)
  }
  return (
    <div>
      AboutUs
      <div style={bord ? {border:'2px solid green'} :  {border:'2px solid red'}}>
        <h3>hello</h3>
        <i class="fa fa-map-marker" aria-hidden="true" onMouseOver={onmouseover} onMouseLeave={onmouseover}></i>
         </div>
    </div>
  )
}

export default AboutUs
