import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useUpdateWishlistMutation } from '../services/addWishList'
import { useGetPropertiesQuery} from '../services/addProperty'
import { updateWish } from '../slice/loginSlice'
function ShowProp() {
    var [updateWishlist]=useUpdateWishlistMutation()
    var {isLoading, isError, data}=useGetPropertiesQuery()
    var userdet=useSelector(state=>state.loginSlice.userdet)
    const dispatch=useDispatch()
    var checkedcatg=useSelector(state=>state.loginSlice.checkli)
    var checkedloc=useSelector(state=>state.loginSlice.checkloc)
    console.log(checkedloc)
    var len=checkedcatg.length
    function addWishlist(houseid){
        var x={...userdet,wishlist:[...userdet.wishlist,houseid]}
        updateWishlist({...userdet,wishlist:[...userdet.wishlist,houseid]}).then(res=>{
            if(res.data.id){
                dispatch(updateWish(res.data))
            }
         })
    }
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
    <div className='flats col-sm-10'>
        
       {
            isLoading ? 'Loading' :
           data.map((e)=>{  
            if(checkedcatg.length==0  || checkedcatg.indexOf(e.catg)!=-1){
                return <div className='col-sm-4 flatimg'>  
                {/* {console.log(checkedcatg.length,e,checkedcatg.indexOf(e.catg))}     */}
                <img src={e.pic} alt='house' />
                <div> 
                    <h4>{e.name}
                            <span>
                                {
                                    userdet.wishlist.indexOf(e.id)!=-1 ?
                                        <i class="fa fa-heart" aria-hidden="true" title="Add to wishlist" 
                                                onClick={()=>removeWishlist(e.id)}></i>
                                    :
                                    <i class="fa fa-heart-o" aria-hidden="true" title="Add to wishlist" 
                                                onClick={()=>addWishlist(e.id)}></i>

                                }
                            </span>
                    </h4>
                    <h5>&#8377; {e.price} &nbsp;  {e.catg}</h5>
                    <div>{e.location}</div>
                </div>
             </div>
            }
            else{
                return ''
            }
             
        } 
     )}
   </div>
  )
}

export default ShowProp
