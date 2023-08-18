import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import HousesData from '../pages/HousesData'
function Wishlist() {
    const dispatch=useDispatch()
    var flatimages=HousesData
    var userdet=useSelector(state=>state.loginSlice.userdet)
  return (
    <div>
     <h4> Your Wishlist</h4>
    <div>
    {
          flatimages.map((e,houseid)=>
            
                        
                              userdet.wishlist.indexOf(houseid)!=-1 ?
                                <div className='col-sm-4 flatimg'>
                                <img src={e} alt='house' />
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
