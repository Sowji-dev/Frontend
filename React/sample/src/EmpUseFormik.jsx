import { useFormik } from 'formik'
import React from 'react'

function EmpUseFormik() {
    function validate(v){
        var errors={}
        if(!v.fname)
            errors.fname='fname is mand'
        if(v.fname && v.fname.length>5)
            errors.fname='max len is 5'
        if(!v.age)
            errors.age='age is mand'
        if(!v.email)
            errors.email='email is mand'
        return errors
    }
    var formik=useFormik({
        initialValues:{
            fname:'',
            lname:'',
            age:'',
            email:''
        },
        validate:validate,
        onSubmit:(v)=>{
            console.log('form submited')
        }
    })
    console.log(formik.touched)
  return (
    <div className='box'>
      <h3>Emp Details using useformik</h3>
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

export default EmpUseFormik
