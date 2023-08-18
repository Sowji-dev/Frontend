import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addWishlist } from '../slice/loginSlice'
import HousesData from '../pages/HousesData'
import { useAddToWishlistMutation } from '../services/addWishList'
function House() {
    var [addwishl]=useAddToWishlistMutation()
    var flatimages=HousesData;
    
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
                flatimages.map((e,houseid)=>{
                    return <div className='col-sm-4 flatimg'>
                            <span>
                                {
                                    userdet.wishlist.indexOf(houseid)!=-1 ?
                                      <i class="fa fa-heart" aria-hidden="true" title="Add to wishlist" 
                                              onClick={()=>addWishlist(houseid)}></i>
                                    :
                                    <i class="fa fa-heart-o" aria-hidden="true" title="Add to wishlist" 
                                              onClick={()=>addWishlist(houseid)}></i>

                                }
                               
                            </span>
                            <img src={e} alt='house' />
                        </div>
                        
                })
            }
        </div>
    </div>
  )
}





export default House
