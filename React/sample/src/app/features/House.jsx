import React from 'react'
import CheckByLoc from './CheckByLoc'
import ShowProp from './ShowProp'
import CheckByCatg from './CheckByCatg'
function House() {
    return (
        <div  className=''>
            <div className='col-sm-2'>
                <CheckByCatg></CheckByCatg>
                <CheckByLoc></CheckByLoc>
            </div>
            <ShowProp></ShowProp>
        </div>
  )
}





export default House
