import React, { useState , useEffect} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLazyGetCustDetailsQuery, useUpdateCustMutation } from '../../services/custList'
import AddFeedback from './AddFeedback'
function EditCust(props) {
  var [updatefn]=useUpdateCustMutation()
  var [lazyGetList]=useLazyGetCustDetailsQuery()
  var [status,setStatus]=useState('')
  var [details, setDetails]= useState({...props.details})
  var [addfeedback, setAddFeedback]=useState(false) 
  console.log(details)
  return (
    <div>
      {
        details &&
       <Formik
          initialValues={{...details}}
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
          })}
          onSubmit={ (values) => {
            console.log(values)
            updatefn({...values}).then(res=>{
              console.log(res)
              if(res.data){
                document.editform.reset() 
                alert('Updated Successfully')
                lazyGetList()
              }
              if(res.error) 
              alert('something went wrong...')
            })
          }}
         >
        <Form name='editform'>
          <div className='fields'>
              <label>Name: </label>
              <Field name="fullname" 
              //  onChange={(e) => 
              //   setDetails({...props.details, fullname:e.target.value})
              //   }
                />
              <ErrorMessage name="fullname" />
          </div>
          <div className='fields'>
              <label>Phone: </label>
              <Field  name="phone"  />
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
          {/* <div className='fields'>
              <label>Feedback: </label>
              <Field  name="feedback" as="textarea" /> 
              <ErrorMessage name="feedback" />
           </div>           */}
           <button type="submit" >
             Update
           </button>
         </Form>
     </Formik>
    }
     {
        !addfeedback &&
        <button onClick={()=>{setAddFeedback(true)}}>Add Feedback</button>
      }
      {
        addfeedback && <AddFeedback details={details}></AddFeedback>
      }
  </div>
  )
}

export default EditCust
