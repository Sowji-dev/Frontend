import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLazyLoginCustomerQuery } from '../services/loginCust';
import { useDispatch} from 'react-redux'
import { loginsucc } from '../slice/loginSlice';
function Login() {
   var [loginfn] = useLazyLoginCustomerQuery()
   const dispatch=useDispatch()
  return (
    <div className='box w-50 mx-auto p-3'>
      <h4>Add New Customer</h4>
      <Formik
       initialValues={{ phone: '', password: ''}}
       validationSchema={ Yup.object({
        phone: Yup.string()
          .required('Required'),
          password: Yup.string()
          .required('Required')
      })}
       onSubmit={ (values,x) => {
        console.log(values)
        loginfn(values).then(res=>{
            console.log(res.data)
            if(res.data.length!=0){
                alert('Login successfull')
                dispatch(loginsucc())
            }
        })
       }}
     >
        <Form >
          <div className='fields'>
              <label>Phone: </label>
              <Field  name="phone"   placeholder='Enter phone'/> <br/>
              <div className='errormsg'> <ErrorMessage name="phone" /> </div>
          </div>
          <div className='fields'>
              <label>Password: </label>
              <Field type="password" name="password"   placeholder='Enter password'/> <br/>
              <div className='errormsg'><ErrorMessage name="password" /> </div>
           </div>         
           <button type="submit" >
             Submit
           </button>
         </Form>
     </Formik>
    </div>
  )
}

export default Login
