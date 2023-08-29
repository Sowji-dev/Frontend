import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addWishlist } from '../slice/loginSlice'
import HousesData from '../pages/HousesData'
import { useAddToWishlistMutation } from '../services/addWishList'
import { useGetPropertiesQuery } from '../services/addProperty'
function House() {
    var [addwishl]=useAddToWishlistMutation()
    var {isLoading, isError, data}=useGetPropertiesQuery()
    console.log(data)
    var userdet=useSelector(state=>state.loginSlice.userdet)
   
    function addWishlist(houseid){
        console.log(houseid)
        console.log(userdet)
        var x={...userdet,wishlist:[...userdet.wishlist,houseid]}
        console.log(x)
        addwishl({...userdet,wishlist:[...userdet.wishlist,houseid]}).then(res=>{
            console.log(res)
         })
         
    }
    return (
    <div className='flats container'>
        <div className='row'>
            {
                 isLoading ? 'Loading' :
                data.map((e)=>{
                    return <div className='col-sm-4 flatimg'>
                            <span>
                                {
                                    userdet.wishlist.indexOf(e.id)!=-1 ?
                                      <i class="fa fa-heart" aria-hidden="true" title="Add to wishlist" 
                                              onClick={()=>addWishlist(e.id)}></i>
                                    :
                                    <i class="fa fa-heart-o" aria-hidden="true" title="Add to wishlist" 
                                              onClick={()=>addWishlist(e.id)}></i>

                                }
                               
                            </span>
                            <img src={e.pic} alt='house' />
                        </div>
                        
                })
            }
        </div>
    </div>
  )
}





export default House
