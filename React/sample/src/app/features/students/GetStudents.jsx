import React, { useEffect, useState } from 'react'

import {  useGetStudentsQuery,
    useDeleteStudentMutation,useLazyGetStudentsQuery
     } from '../../../services/studentsApi'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'
function GetStudents() {
    var {isLoading, isError, data}=useGetStudentsQuery()
    console.log(data)
    var [delStdFn]=useDeleteStudentMutation()
    var [lazyGetStudnts]=useLazyGetStudentsQuery()
   var [selectedStd, setSelectedStd]=useState({})
   var [addForm, setAddForm]=useState(true)
   useEffect(()=>{
    setAddForm(true)
   },[data])
    function deleteStd(i){
        delStdFn(i).then(res=>{
            console.log(res)
            res.data && lazyGetStudnts();
        });
       
    }
    function editStd(ob){
        setSelectedStd({...ob})
        setAddForm(false)
    }
  return (
    <div className='box '>
      <h4></h4>
      <div>
        {addForm && <AddStudent></AddStudent>}
        {!addForm && <EditStudent selectedStd={selectedStd}></EditStudent>}
       { isLoading && <h3>Loading..</h3> }
       {
        ( !isLoading && !isError ) &&
           data.map(e=>
            <div>
                 <span key={e.id}>{e.id}. {e.fname} - {e.addr}</span> &nbsp;
                 <button onClick={()=>{deleteStd(e.id)}}>Delete</button>
                 <button onClick={()=>{editStd(e)}}>Edit</button>
            </div>)
               
       }
      </div>
      {/* <form onSubmit={formik.handleSubmit}>
        <input type='text' name='fname' 
            onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter fname' />
            {formik.touched.fname && formik.errors.fname}&nbsp;&nbsp;
        <input type='text' name='addr' 
            onChange={formik.handleChange}  onBlur={formik.handleBlur} placeholder='Enter addr' />
            {formik.touched.addr && formik.errors.addr}&nbsp;&nbsp;
         <button type='submit' >Submit form</button>
      </form> */}
    </div>
  )
}

export default GetStudents
