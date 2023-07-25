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
            email:'',
            gen:''
        },
        validationSchema: Yup.object({
            fname: Yup.string()
              .min(5, 'min 5 characters ')
              .required('fname Required'),
            age: Yup.number()
              .max(70, 'age should be less than 70')
              .required('age Required'),
            email: Yup.string().email('Invalid email address').required('email Required'),
            gen:Yup.string()
              .required('gender Required ')
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
         <div>
            Gender:
            <input type='radio' value='male' name='gen' onChange={formik.handleChange}/>Male
            <input type='radio' value='female' name='gen' onChange={formik.handleChange}/>Female
            <input type='radio' value='other' name='gen' onChange={formik.handleChange}/>Other
            <div>{formik.errors.gen}</div>
         </div>
        <button type='submit' >Submit form</button>
      </form>
    </div>
  )
}

export default Emp
