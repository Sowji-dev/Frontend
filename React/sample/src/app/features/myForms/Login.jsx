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
    <div className=' d-flex'>
    <div className='home'>
      <div className='hometxt'>
        <h3> GET YOUR DREAM HOME CONSTRUCTED BY THE EXPERTS</h3>
        <h2>A RESIDENTIAL CONSTRUCTION COMPANY</h2>
      </div>
      <img src='https://thatsisterimages.s3.amazonaws.com/wp-content/uploads/2020/11/17140352/Featured-Image-7.jpg'/>
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
