import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

function EmpFormicComp() {
  return (
    <div  className='box'>
      <h3>Emp Details using get Formik component</h3>
      <Formik initialValues={{
            fname:'',
            lname:'',
            age:'',
            email:''
        }} 
        validationSchema={ Yup.object({
          fname: Yup.string()
            .min(5, 'min 5 characters ')
            .max(8, 'max 8 chars')
            .required('Required'),
            age: Yup.number()
            .max(70, 'age should be less than 70')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })} 
        onSubmit={(v)=>{
          console.log('form submited')
      }}>

      {
        ((formik)=>{
          return(
            <form onSubmit={formik.handleSubmit}>
                <input type='text' name='fname' {...formik.getFieldProps('fname')} placeholder='Enter fname' />
                    {formik.touched.fname && formik.errors.fname}
                <input type='text' name='lname' {...formik.getFieldProps('lname')}  placeholder='Enter lname' />
                <input type='number' name='age' {...formik.getFieldProps('age')}placeholder='Enter age' />
                    {formik.touched.age && formik.errors.age}
                <input type='email' name='email' {...formik.getFieldProps('email')} placeholder='Enter email' />
                    {formik.touched.email && formik.errors.email}
                <button type='submit' >Submit form</button>
            </form>
          )
        })
      }
      </Formik>
    </div>
  )
}

export default EmpFormicComp
