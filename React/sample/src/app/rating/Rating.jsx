import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { changeRate } from './ratingSlice'

function Rating() {
  var {stars}=useSelector(state=>state.ratingSlice)
    const dispatch=useDispatch()
    console.log(stars)
    var starCount=0;
    stars.forEach(e=>{
     if(e==1)
      starCount++
    })
    console.log(starCount)
  return (
    <div className='box '>
        <h4 >Rating : {starCount}/{stars.length}</h4>
        {stars.map((e,i)=>
          <div className='rating' onClick={()=>dispatch(changeRate(i))}>
               {
                  e==0 ?<i className="fa fa-star-o"></i> : <i className="fa fa-star"></i>
               }
          </div>
        )}
  </div>
  )
}

export default Rating
