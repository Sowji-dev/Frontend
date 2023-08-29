import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAddCustDetailsMutation } from '../../services/addCust';
function AddCust() {
  var [addfn]=useAddCustDetailsMutation()
  return (
    <div className=' d-flex login '>
         <div className='subpage  '>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhKzsAB3WVEcvLF76v5rEv684pALLoh5dAw&usqp=CAU"   alt="builidng"></img>
          
          </div> 
          <div className='box'>
      <h4>Add New Customer</h4>
      <Formik
       initialValues={{ fullname: '', phone: '', place:'',feedback:'',email:'',role:'' }}
       validationSchema={ Yup.object({
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
      })}
       onSubmit={ (values,x) => {
        console.log(x)
        addfn(values).then((res)=>{
          console.log(res)
          if(res.data){ 
            alert('Added Successfully')
            x.resetForm()
          }
          if(res.error) 
          alert('something went wrong...')
        })
        //alert(status)
       }}
     >
        <Form >
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
              <Field as="select" name="role"  placeholder='Enter role'>
                  <option value="3">User</option>
                  <option value="5">Admin</option>
                  {/* <option value="blue">Blue</option> */}
              </Field>
              <div className='errormsg'><ErrorMessage  name="role" /></div>
           </div> 
          <div className='fields'>
              <label>Feedback: </label>
              <Field  name="feedback" as="textarea"   placeholder='Enter feedback' />  <br/>
              <div className='errormsg'><ErrorMessage  name="feedback" /></div>
              
           </div>          
           <button type="submit" >
             Submit
           </button>
         </Form>
     </Formik>
    </div>
    </div>
  )
}

export default AddCust
