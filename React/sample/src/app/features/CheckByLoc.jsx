import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updLocpref } from '../slice/loginSlice';
function CheckByLoc() {
    var loc=["Kondapur","Whitefield","Jublie hills","Nizampet","Gachibowli","Madhapur"]
    var checkedloc=useSelector(state=>state.loginSlice.checkloc)
    // console.log(checkedloc)
    const dispatch=useDispatch()
    function updloc(){
        var newhtype=[...document.chckboxbyloc.loc]
        var checkedli=[];
        newhtype.forEach(e=>{
            if(e.checked)
            checkedli.push(e.defaultValue)
        })
        // console.log(checkedli)
        dispatch(updLocpref(checkedli))
    }
  return (
    <form id='chckboxbyloc' name='chckboxbyloc' >
        <h4>Search by Location:</h4>
    {
        loc.map(e=>{
            return <div key={e} >
                {checkedloc.indexOf(e)!=-1 ?  <input type='checkbox' name='loc' value={e} 
                    onChange={updloc}  checked/> 
                    : <input type='checkbox' name='loc' value={e} 
                    onChange={updloc}  /> }
               {e} 
            </div>
        })
    }
</form>

  )
}

export default CheckByLoc
