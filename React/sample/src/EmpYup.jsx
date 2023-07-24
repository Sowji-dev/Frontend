import { useFormik } from 'formik'
import { func } from 'prop-types'
import React from 'react'
import * as Yup from 'yup';

function Emp() {
   
    var formik=useFormik({
        initialValues:{
            fname:'',
            lname:'',
            age:'',
            email:''
        },
        validationSchema: Yup.object({
            fname: Yup.string()
              .min(5, 'min 5 characters ')
              .required('Required'),
              age: Yup.number()
              .max(70, 'age should be less than 70')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
          }),
        onSubmit:(v)=>{
            console.log('form submited')
        }
    })
    console.log(formik.touched)
  return (
    <div className='box'>
      <h3>Emp Details using YUP</h3>
      <div>{JSON.stringify(formik.values)}</div>

      <form onSubmit={formik.handleSubmit}>
        <input type='text' name='fname' 
            onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter fname' />
            {formik.touched.fname && formik.errors.fname}
        <input type='text' name='lname' 
            onChange={formik.handleChange}  placeholder='Enter lname' />
        <input type='number' name='age' 
            onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter age' />
             {formik.touched.age && formik.errors.age}
        <input type='email' name='email' 
            onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter email' />
             {formik.touched.email && formik.errors.email}
        <button type='submit' >Submit form</button>
      </form>
    </div>
  )
}

export default Emp
