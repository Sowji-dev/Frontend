import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import HousesData from '../pages/HousesData'
import { useLazyGetPropertiesQuery,useGetPropertiesQuery } from '../services/addProperty'
import { useUpdateWishlistMutation } from '../services/addWishList'
import { updateWish } from '../slice/loginSlice'
function Wishlist() {
    var x=useLazyGetPropertiesQuery()
    var wishlistPics=useSelector(state=>state.loginSlice.userdet.wishlist)
    var userdet=useSelector(state=>state.loginSlice.userdet)
    var {isLoading, isError, data}=useGetPropertiesQuery()
    var [updateWishlist]=useUpdateWishlistMutation()
    console.log(data)
    const dispatch=useDispatch()
    function removeWishlist(houseid){
      var tmp=[...userdet.wishlist];
      var rem_ind=tmp.indexOf(houseid)
      tmp.splice(rem_ind,1)
      updateWishlist({...userdet,wishlist:[...tmp]}).then(res=>{
         if(res.data.id){
             dispatch(updateWish(res.data))
         }
      })
 }
  return (
    <div>
     <h4> Your Wishlist</h4>
    <div>
    {
         isLoading ? 'Loading' :
          data.map((e)=>
            wishlistPics.indexOf(e.id)!=-1 ?
              // <div className='col-sm-4 flatimg'>
              // <img src={e.pic} alt='house' />
              // </div>



               <div className='col-sm-4 flatimg'>
                       
              <img src={e.pic} alt='house' />
              <div>
                   
              <h4>{e.name}
                   <span>
                  {
                     
                        <i class="fa fa-heart" aria-hidden="true" title="Add to wishlist" 
                                onClick={()=>removeWishlist(e.id)}></i>
                     

                  }
              </span>
              </h4>
                   <h6>&#8377; {e.price}</h6>
                   <div>{e.location}</div>
               </div>
              
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