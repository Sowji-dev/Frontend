import React from 'react'
import { useAddStudentsMutation,useLazyGetStudentsQuery } from '../../../services/studentsApi'
import { Formik } from 'formik'
import * as Yup from 'yup';
function AddStudent() {
    var [addStdFn]=useAddStudentsMutation()
    var [lazyGetStudnts]=useLazyGetStudentsQuery()
  return (
    <div className='box'>
        <h3>Add form</h3>
        <Formik initialValues={{
            fname:'',
            addr:'',
            
        }} 
        validationSchema={ Yup.object({
          fname: Yup.string()
            .min(1, 'min 1 characters ')
            .max(8, 'max 8 chars')
            .required('Required'),
            addr: Yup.string()
           
            .required('Required'),
        })} 
        onSubmit={(v)=>{
          console.log(v)
          addStdFn(v).then(res=>{
            console.log(res)
            res.data && lazyGetStudnts();
            res.error && console.log('something went wrong')
        });
      }}>

      {
        ((formik)=>{
          return(
                <form onSubmit={formik.handleSubmit}>
                <input type='text' name='fname' 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter fname' />
                    {formik.touched.fname && formik.errors.fname}&nbsp;&nbsp;
                <input type='text' name='addr' 
                    onChange={formik.handleChange}  onBlur={formik.handleBlur} placeholder='Enter addr' />
                    {formik.touched.addr && formik.errors.addr}&nbsp;&nbsp;
                <button type='submit' >Add Student</button>
                </form>
          )
        })
      }
      </Formik>
    </div>
  )
}

export default AddStudent
