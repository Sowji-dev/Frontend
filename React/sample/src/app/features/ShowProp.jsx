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
    var storedata=useSelector(state=>state.loginSlice)
    var checkedcatg=[...storedata.checkli]
    var checkedloc=[...storedata.checkloc]
     console.log('catg:', checkedcatg,checkedcatg.length)
    console.log('locs:', checkedloc,checkedloc.length)
    var  showflats
    // console.log(data)
    if(data){
       showflats= data.filter(e=>{  
        console.log('dataa',e, checkedcatg.length,checkedloc.length)
           if(checkedcatg.length==0  && checkedloc.length==0){
            console.log('all', checkedcatg.length,checkedloc.length)
                return true}
            else if(checkedcatg.length=!0 && checkedloc.length==0 && checkedcatg.indexOf(e.catg)!=-1){
               console.log('catg',e, e.catg)
                return true
            }
            else if(checkedloc.length=!0 && checkedcatg.length==0 && checkedloc.indexOf(e.location)!=-1){
               console.log('e.loc', e, e.location)
                return true
            }
            else if(checkedloc.length=!0 && checkedcatg.length!=0 && 
                checkedcatg.indexOf(e.catg)!=-1  && checkedloc.indexOf(e.location)!=-1){
                   console.log('only loc & catg', e.catg, e.location)
                return true
            }
            else
                return false
        })
    }
    // console.log(showflats)

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
            showflats.map((e)=>{  
                return <div className='col-sm-4 flatimg'>  
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
     )}
   </div>
  )
}

export default ShowProp
