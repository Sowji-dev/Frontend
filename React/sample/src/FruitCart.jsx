import React from 'react'

function FruitCart(props) {
    console.log(props)
    var {f=props.f,p=props.p,i=props.i,q=props.q,url=props.url}=props
  return (
    <div className='list'>
        <div >
            <div>{f} <span className='frt'> Rs.{p}</span></div>
            <span onClick={()=>props.inc(i)}><i class="fa fa-plus"></i></span>
      <span className='qnty'>{q}</span>
      <span onClick={()=>props.dec(i)}><i class="fa fa-minus"></i></span>
      <br/><br/>
      <span className='qnty amnt'> Rs.{q*p}</span>
            
        </div>
        <img src={url}/>
      
    </div>
  )
}

export default FruitCart