import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incLike, incdisLike } from './likeSlice'
function Likes() {
    var {like,dislike}=useSelector(state=>state.likeSlice)
    const dispatch=useDispatch()
  return (
    <div className='box'>
      <h4 className=''>
            Likes <i className='fa fa-thumbs-up'  onClick={()=>dispatch(incLike())}></i>
                &nbsp;&nbsp; {like}
        </h4>
      <h4>
          Dislikes <i className='fa fa-thumbs-down' onClick={()=>dispatch(incdisLike())}></i>
        &nbsp;&nbsp; {dislike}
    </h4>
    </div>
  )
}

export default Likes
