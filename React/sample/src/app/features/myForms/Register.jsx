import React, { useState } from 'react'
import { useFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Register() {
  const formik = useFormik({
    initialValues:{ fullname: '', phone: '', place:'',email:'', pref:'',area:'',budeget:'' },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(4, 'min 4 characters ')
        .max(8, 'max 8 chars')
        .required('Required'),
      phone: Yup.string()
        .required('Required')
        .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'invalid phone number'),
      email: Yup.string()
        .required('Required')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid Email'),
      place: Yup.string()
        .required('Required'),
      feedback: Yup.string()
        .min(4, 'min 4 characters ')
        .required('Required'),
    }),
    onSubmit :(values) => {
      console.log(values)
    },
  });
  return (
    <div className=' d-flex login '>
         <div className='subpage  '>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhKzsAB3WVEcvLF76v5rEv684pALLoh5dAw&usqp=CAU"   alt="builidng"></img>
          
          </div> 
          <div className='box'>
      <h4>Register</h4>
      
      {/* <Form >
          <div className='fields'>
              <label>Name: </label>
              <Field name="fullname"  placeholder='Enter Name'/>
              <br/>
              <div className='errormsg'><ErrorMessage name="fullname" /> </div>
          </div>
          <div className='fields'>
              <label>Phone: </label>
              <Field  name="phone"  type="number" placeholder='Enter phone'/> <br/>
              <div className='errormsg'> <ErrorMessage name="phone" /> </div>
          </div>
          <div className='fields'>
              <label>Email: </label>
              <Field type="email" name="email"   placeholder='Enter email'/> <br/>
              <div className='errormsg'> <ErrorMessage name="email" /> </div>
          </div>
          <div className='fields'>
              <label>Place: </label>
              <Field name="place"   placeholder='Enter place'/> <br/>
              <div className='errormsg'><ErrorMessage name="place" /> </div>
           </div>
           <div className='fields'>
              <label>Role: </label>
              <Field as="select" name="pref"  placeholder='Select your Preferences'>
                  <option value="3">User</option>
                  <option value="5">Admin</option>
              </Field>
              <div className='errormsg'><ErrorMessage  name="pref" /></div>
           </div> 
          <div className='fields'>
              <label>Feedback: </label>
              <Field  name="area"  placeholder='Enter sqft' />  <br/>
              <div className='errormsg'><ErrorMessage  name="area" /></div>
              
           </div>          
           <button type="submit" >
             Submit
           </button>
        
         </Form> */}
     
    </div>
    </div>
  )
}

export default Register
