import './App.css'
import React from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
function App() {
  var formik=useFormik({
    initialValues:{
      myname:'',
      age:'',
      email:''
    },
    validationSchema: Yup.object({
      myname: Yup.string()
        .min(5, 'Must be atleast 5 chars')
        .required('Required'),
      age: Yup.string()
        .max(3, 'Must be 3 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit:((v) => {
      console.log('hii')

      console.log(v)

    })
  })
  //console.dir(formik.touched)
  return (
    <div >
     {JSON.stringify(formik.touched )}<br/><br/><br/>
      <form onSubmit={formik.handleSubmit} >
      
          <input type='text' name='myname' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter name'/>
          <div>{formik.errors.myname}</div><br/>

          <input type='text' name='age' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter age' />
          <div>{formik.errors.age}</div><br/>
          <input type='email' name='email' onChange={formik.handleChange}  placeholder='Enter email' />
          <div>{formik.errors.email}</div><br/>
          <button type='submit' >Submit form</button>
      </form>
      </div>
  );
}
export default App;