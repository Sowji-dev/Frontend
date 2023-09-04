import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLazyLoginCustomerQuery } from '../../services/loginCust';
import { useDispatch} from 'react-redux'
import { loginsucc } from '../../slice/loginSlice';
import { useNavigate } from "react-router-dom";
function Login() {
   var [loginfn] = useLazyLoginCustomerQuery()
   const dispatch=useDispatch()
   const nav = useNavigate();
   var [status, setStatus]=useState(true)
  return (
    // <div className='box w-50 mx-auto p-3'>
      <div className=' d-flex login '>
         <div className='subpage  '>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhKzsAB3WVEcvLF76v5rEv684pALLoh5dAw&usqp=CAU"   alt="builidng"></img>
          
          </div> 
          <div className='box'>
      <h4>Add New Customer</h4>
      <Formik
       initialValues={{ phone: '906749648', password: 'hello'}}
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
                dispatch(loginsucc(res.data[0]))
                nav("/");
            }
            else
            setStatus(false)
        })
       }}
     >
        <Form >
          admin 906749648<br></br>
          user 942527245
          <div className='fields'>
              <label>Phone: </label>
              <Field  name="phone"  placeholder='Enter phone' /> <br/>
              <div className='errormsg'> <ErrorMessage name="phone" /> </div>
          </div>
          <div className='fields'>
              <label>Password: </label>
              <Field type="password" name="password"   placeholder='Enter password' /> <br/>
              <div className='errormsg'><ErrorMessage name="password" /> </div>
           </div> 
           {
            !status && <div style={{color:'red'}}>Incorrect phone number or password</div>
           }     
           <br/>   
           <button type="submit" >
             Submit
           </button>
         </Form>
     </Formik>
     </div></div>
  )
}

export default Login
