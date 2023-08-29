import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import HousesData from '../pages/HousesData'
import { useLazyGetPropertiesQuery,useGetPropertiesQuery } from '../services/addProperty'
function Wishlist() {
    var x=useLazyGetPropertiesQuery()
    var wishlistPics=useSelector(state=>state.loginSlice.userdet.wishlist)
    var {isLoading, isError, data}=useGetPropertiesQuery()
    console.log(data)
  return (
    <div>
     <h4> Your Wishlist</h4>
    <div>
    {
         isLoading ? 'Loading' :
          data.map((e)=>
            wishlistPics.indexOf(e.id)!=-1 ?
              <div className='col-sm-4 flatimg'>
              <img src={e.pic} alt='house' />
              </div>
            :
            ''        
          )
      }
    </div>
    </div>
  )
}

export default Wishlist