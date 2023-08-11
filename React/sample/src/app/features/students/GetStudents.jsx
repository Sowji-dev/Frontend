import React from 'react'
import { useFormik } from 'formik'
import { useAddStudentsMutation, useGetStudentsQuery,
    useDeleteStudentMutation,useLazyGetStudentsQuery,
    useUpdateStudentMutation } from '../../../services/studentsApi'
function GetStudents() {
    var {isLoading, isError, data}=useGetStudentsQuery()
    console.log(data)
    var [addStdFn]=useAddStudentsMutation()
    var [delStdFn]=useDeleteStudentMutation()
    var [lazyGetStudnts]=useLazyGetStudentsQuery()
    var [updateStd]=useUpdateStudentMutation()
    function validate(v){
        var errors={}
        if(!v.fname)
            errors.fname='fname is mand'
        if(!v.addr)
            errors.addr='addr is mand'
        return errors
    }
    var formik=useFormik({
        initialValues:{
            fname:'',
            addr:'',
        },
        validate:validate,
        onSubmit:(v)=>{
            console.log('form submited', formik.values)
            addStdFn(formik.values).then(res=>{
                console.log(res)
                res.data && lazyGetStudnts();
                res.error && console.log('something went wrong')
            });
            
           
        }
    })
    function deleteStd(i){
        delStdFn(i).then(res=>{
            console.log(res)
            res.data && lazyGetStudnts();
        });
       
    }
    function updateStudent(){
        updateStd({
            fname:'newname',
            addr:'newaddr',
            id:5

        }).then(res=>{
            console.log(res)
        })
    }
  return (
    <div className='box '>
      <h4></h4>
      <div>
       { isLoading && <h3>Loading..</h3> }
       {
        ( !isLoading && !isError ) &&
           data.map(e=>
            <div>
                 <span key={e.id}>{e.id}. {e.fname} - {e.addr}</span> &nbsp;
                 <button onClick={()=>{deleteStd(e.id)}}>Delete</button>
            </div>)
               
       }
      </div>
      <form onSubmit={formik.handleSubmit}>
        <input type='text' name='fname' 
            onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter fname' />
            {formik.touched.fname && formik.errors.fname}&nbsp;&nbsp;
        <input type='text' name='addr' 
            onChange={formik.handleChange}  onBlur={formik.handleBlur} placeholder='Enter addr' />
            {formik.touched.addr && formik.errors.addr}&nbsp;&nbsp;
         <button type='submit' >Submit form</button>
        {/* <input type='number' name='age' 
            onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter age' />
             {formik.touched.age && formik.errors.age}
        <input type='email' name='email' 
            onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter email' />
             {formik.touched.email && formik.errors.email} */}
      </form>
      <button onClick={updateStudent} >Update</button>
    </div>
  )
}

export default GetStudents
