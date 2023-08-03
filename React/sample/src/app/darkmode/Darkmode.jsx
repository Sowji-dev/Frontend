import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { changeMode } from './darkmodeSlice'
function Darkmode() {
    var theme=useSelector(state=>state.darkmodeSlice.theme)
    const dispatch=useDispatch()
    console.log(theme)
  return (
    <div >
     <h3>Light mode Dark mode </h3> 
        <div  className='toglbtn'>
            <i className={theme=='dark' ? 'fa fa-toggle-off' : 'fa fa-toggle-on'} 
                onClick={()=>dispatch(changeMode())}></i>
        </div>

      <h3> Current theme is {theme} mode</h3>
    </div>
  )
}

export default Darkmode
