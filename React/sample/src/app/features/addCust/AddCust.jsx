import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {  useAddCustDetailsMutation } from '../../services/addCust';
function AddCust() {
  var [addfn]=useAddCustDetailsMutation()
  return (
    <div className='box w-50 mx-auto p-3'>
    
      AddCust
      <Formik
       initialValues={{ fullname: '', phone: '', place:'',feedback:'',email:'' }}
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
       onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        addfn(values).then(res=>{
          console.log(res)
        })
        //  setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
        //    setSubmitting(false);
        //  }, 400);
       }}
     >
     
        <Form>
          <div className='fields'>
              <label>Name: </label>
              <Field name="fullname" />
              <ErrorMessage name="fullname" />
          </div>
          <div className='fields'>
              <label>phone: </label>
              <Field  name="phone" />
              <ErrorMessage name="phone" />
          </div>
          <div className='fields'>
              <label>Email: </label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
          </div>
          <div className='fields'>
              <label>Place: </label>
              <Field name="place" />
              <ErrorMessage name="place" />
           </div>
          <div className='fields'>
              <label>Feedback: </label>
              <Field  name="feedback" as="textarea" /> 
              <ErrorMessage name="feedback" />
           </div>          
           <button type="submit" >
             Submit
           </button>
         </Form>
     </Formik>
    </div>
  )
}

export default AddCust
