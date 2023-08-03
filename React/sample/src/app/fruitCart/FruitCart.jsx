import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { inc, dec, resetCart } from './fruitCartSlice'
function FruitCart() {
    var {fruits}=useSelector(state=>state.fruitCartSlice)
    console.log(fruits)
    const dispatch=useDispatch()
    var tot=0,items=0;
    fruits.forEach((e,i)=>{
      tot=tot+(e.price*e.quant)
      items=items+e.quant
    })
  return (
    <div className='boxBord'>
         <div className='head'>
            <h3>Fruit Vibes</h3>
            <div className='total'>Cart total: Rs.{tot}</div>
            <div  className='items'>
                 <i className="fa fa-shopping-cart"></i>
                <span>{items}</span>
            </div>
            <div style={{border:'none'}}  title='Reset Cart' className=" "
                onClick={()=>dispatch(resetCart())}>
                <i className="cancel fa fa-close"></i>
            </div>
         </div>
       
        {   
            fruits.map((e,i)=>
            <div key={i} className='list'>
                    <div >
                        <div>{e.fruit} <span className='frt'> Rs.{e.price}</span></div>
                        <span onClick={()=>{dispatch(inc(i))}}><i className="fa fa-plus"></i></span>
                        <span className='qnty'>{e.quant}</span>
                        <span onClick={()=>{dispatch(dec(i))}}><i className="fa fa-minus"></i></span>
                        <br/><br/>
                        <span className='qnty amnt'> Rs.{e.price * e.quant}</span>
                    </div>
                    <img src={e.url}/>
        
            </div>
            )
        }
    </div>
  )
}

export default FruitCart
