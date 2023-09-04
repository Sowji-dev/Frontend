import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updCheckList } from '../slice/loginSlice';
function CheckByCatg() {
    var housetype=["2BHK","3BHK","Villa","Duplex","Triplex","1BHK"]
    var checkedprop=useSelector(state=>state.loginSlice.checkli)
    console.log(checkedprop)
    const dispatch=useDispatch()
    function updchkli(){
        var newhtype=[...document.chckboxbycatg.housetype]
        var checkedli=[];
        newhtype.forEach(e=>{
            if(e.checked)
            checkedli.push(e.defaultValue)
        })
        //console.log(checkedli)
        dispatch(updCheckList(checkedli))
    }
  return (
    <form id='chckboxbyloc' name='chckboxbycatg'>
        <h4>Search by catg:</h4>
    {
        housetype.map(e=>{
            return <div key={e} >
                {checkedprop.indexOf(e)!=-1 ?  <input type='checkbox' name='housetype' value={e} 
                    onChange={updchkli}  checked/> 
                    : <input type='checkbox' name='housetype' value={e} 
                    onChange={updchkli}  /> }
               {e} 
            </div>
        })
    }
</form>

  )
}

export default CheckByCatg
