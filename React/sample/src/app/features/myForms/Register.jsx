import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAddCustDetailsMutation } from '../../services/addCust';
function Register() {
  var [addcustFn]=useAddCustDetailsMutation()

  return (
    <div className=' d-flex'>
      <div className='home'>
        <div className='hometxt'>
          <h3> GET YOUR DREAM HOME CONSTRUCTED BY THE EXPERTS</h3>
          <h2>A RESIDENTIAL CONSTRUCTION COMPANY</h2>
        </div>
        <img src='https://thatsisterimages.s3.amazonaws.com/wp-content/uploads/2020/11/17140352/Featured-Image-7.jpg'/>
        </div>
        <div className='box scd'>
      <h4>Add New Customer</h4>
      <Formik
       initialValues={{ fullname: '', phone: '', place:'',email:'',place:'', pref:'', }}
       validationSchema={ Yup.object({
        // fullname: Yup.string()
        //   .min(2, 'min 2 characters ')
        //   .max(8, 'max 8 chars')
        //   .required('Required'),
        // phone: Yup.number()
        //   .required('Required')
        //   .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'invalid phone number'),
        // email: Yup.email()
        //   .required('Required')
        //   .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid Email'),
        // place: Yup.string()
        //   .required('Required'),
        // feedback: Yup.string()
        //   .min(4, 'min 4 characters ')
        //   .required('Required'),
      })}
       onSubmit={ (values,x) => {
        console.log(values)
        addcustFn(values).then(res=>{
          console.log(res)
        })
      
       }}
     >
      <Form as={Box} sx={{ '& > :not(style)': { m: 1, width: '25ch' },}}>
         <div className='fields'>
              <Field name="fullname"  label=' Name' as={TextField} variant='outlined'/>
              <br/>
              <div className='errormsg'><ErrorMessage name="fullname" /> </div>
          </div>
          <div className='fields'>
              <Field  name="phone"  type="number" label=' phone' as={TextField} variant='outlined' /> <br/>
              <div className='errormsg'> <ErrorMessage name="phone" /> </div>
          </div>
          <div className='fields'>
              <Field type="email" name="email"  as={TextField} label=' email' variant='outlined'/> <br/>
              <div className='errormsg'> <ErrorMessage name="email" /> </div>
          </div>
          <div className='fields'>
              <Field name="place" as={TextField} variant='outlined' label=' place'/> <br/>
              <div className='errormsg'><ErrorMessage name="place" /> </div>
           </div>
           <div className='fields'>
              <label>Preferences: </label>
              <Field as="select" name="pref"  placeholder='Select your Prefernces'>
                  <option value="villa">Villa</option>
                  <option value="2bhk">2BHK</option>
                  <option value="3bhk">3BHK</option>
              </Field>
              <div className='errormsg'><ErrorMessage  name="pref" /></div>
           </div> 
                   
           <button type="submit"  as={Button} variant='outlined'>
             Register
           </button>

      {/* <TextField  label="Full Name" variant="standard" name="fullname"  />
      <TextField  label="Phone NUmber" variant="standard"  name="phone"  type="number"  />
      <TextField  label="Email" variant="standard"  type="email" name="email" />
      <TextField  label="Place" variant="standard"  name="place" />
      <Button size="medium" type='submit'>Register </Button> */}
    </Form>
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
              <label>Preferences: </label>
              <Field as="select" name="pref"  placeholder='Select your Prefernces'>
                  <option value="villa">Villa</option>
                  <option value="2bhk">2BHK</option>
                  <option value="3bhk">3BHK</option>
              </Field>
              <div className='errormsg'><ErrorMessage  name="pref" /></div>
           </div> 
                   
           <button type="submit" >
             Submit
           </button>
         </Form> */}
     </Formik>
    
       
     </div>
      
     </div> 



   
  
  )
}

export default Register
