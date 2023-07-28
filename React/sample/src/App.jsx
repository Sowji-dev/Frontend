import './App.css'
import React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';
function App() {
  var formik=useFormik({
      initialValues:{
        myname:'',
        pwd:''
      },
      validationSchema  : Yup.object({
        myname: Yup.string()
          .min(5, 'min 5 characters ')
          .required('Please fill name field.'),
        pwd: Yup.string()
         // .min(6, 'pwd should be max 6 chars')
        //  .matches(/^\w+[- ?!@#$%^&*\/\\]$/,
        //      'Pattern not matching')
          
          .matches(/(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]/,
             'Password must have 8 characters with Atleast 1 UPPERCASE, 1 lowercase, 1 special and 1 numeric character')
          .required('Please fill password field.')
      }),
      onSubmit:(values=>{
        console.log('hello')
       
      })
  })
  console.log(formik.touched)
  function validateForm(){

  }
  return (
    <div >
      <h3>Form validations using formik and yup</h3>
      {JSON.stringify(formik.values)}
      <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <label>User name</label>
        <input type='text' name='myname' placeholder='Enter name' {...formik.getFieldProps('myname')}/>
        <div className='red'>{formik.errors.myname}</div>
        <div  className='green'>{!formik.errors.myname && formik.touched.myname ? <div >Valid username</div>:''}</div>
        <br/>

        <label>Password</label>
        <input type='password' name='pwd' placeholder='Enter Password'  {...formik.getFieldProps('pwd')}/>
        <div className='red'>{formik.errors.pwd}</div><br/>


        <button type='submit'>Save</button>
      </form>
      </div>
  );
}
export default App;