import React, { useEffect, useState } from 'react'
import { useUpdateStudentMutation,useLazyGetStudentsQuery } from '../../../services/studentsApi'
import { Formik } from 'formik'
import * as Yup from 'yup';
function EditStudent(props) {
    console.log(props)
    var [editStd]=useUpdateStudentMutation()
    var [lazyGetStudnts]=useLazyGetStudentsQuery()
    var [propsdata, setPropsData]= useState({}) 
    console.log(propsdata)   
    useEffect(()=>{
        setPropsData({...props.selectedStd})
    },[props])
  return (
    <div className='box'>
        <h3>Edit form</h3>

        <Formik initialValues={{
            fname:propsdata.fname,
            addr:'',
            id:props.selectedStd.id
            // fname:'',
            // addr:'',
            
        }} 
        validationSchema={ Yup.object({
          fname: Yup.string()
            .min(1, 'min 1 characters ')
            .max(8, 'max 8 chars')
            .required('Required'),
            addr: Yup.string()
           
            .required('Required'),
        })}
        onSubmit={()=>{
          console.log('hiiiiiiiiiiiiii')
        //   editStd(v).then(res=>{
        //     console.log(res)
        //     res.data && lazyGetStudnts();
        //     res.error && console.log('something went wrong')
        // });
      }}>

      {
        ((formik)=>{
           console.log('formik data',formik)
          return(
            
                {propsdata} && 
                <form onSubmit={formik.handleSubmit}>
                <input type='text' name='fname'   value={propsdata.fname}
                     onChange={(e) => {
                        setPropsData({...propsdata, fname:e.target.value})
                    } } onBlur={formik.handleBlur} placeholder='Enter fname' />
                    {formik.touched.fname && formik.errors.fname}&nbsp;&nbsp;
                <input type='text' name='addr' value={propsdata.addr}
                    onChange={(e) => setPropsData({...propsdata, addr:e.target.value})}  onBlur={formik.handleBlur} placeholder='Enter addr' />
                    {formik.touched.addr && formik.errors.addr}&nbsp;&nbsp;
                <button type='submit' >Update Student</button>
                </form>
            
                
          )
        })
      }
      </Formik>
    </div>
  )
}

export default EditStudent
