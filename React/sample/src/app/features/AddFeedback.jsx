import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {  useAddfeedbackMutation, useLazyGetCustDetailsQuery } from '../services/custList';
function AddFeedback(props) {
    var [addfeedbackfn]=useAddfeedbackMutation()
   
  return (
    <div>
      <Formik
       initialValues={{ newfeedback: ''}}
       validationSchema={ Yup.object({
        newfeedback: Yup.string()
          .required('Required')
          .min(4, 'min 4 characters ')
      })}
       onSubmit={ (values,x) => {
        console.log(values)
        addfeedbackfn({...props.details,feedback:[...props.details.feedback,values.newfeedback]}).then(
          res=>{
            console.log(res)
          }
        )
        console.log(x)
        // addfeedbackfn(values)
        
       }}
     >
        <Form className='feedback'>
          <div className='fields'>
              <Field  name="newfeedback"   as="textarea"   placeholder='Enter  feedback'/> <br/>
              <div className='errormsg'> <ErrorMessage name="newfeedback" /> </div>
          </div>       
           <button type="submit" >
             Add Comment
           </button>
         </Form>
     </Formik>
    </div>
  )
}

export default AddFeedback
