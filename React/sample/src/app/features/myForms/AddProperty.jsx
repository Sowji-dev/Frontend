import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAddPropertyMutation } from '../../services/addProperty';
function AddProperty() {
  var [addpropfn]=useAddPropertyMutation()
  return (
    <div className=' d-flex login '>
         <div className='subpage  '>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhKzsAB3WVEcvLF76v5rEv684pALLoh5dAw&usqp=CAU"   alt="builidng"></img>
          
          </div> 
          <div className='box'>
      <h4>Add New Property</h4>
      <Formik
       initialValues={{ name: '',catg:'', pic: '', price:'',sqft:'',location:'',floor:'' }}
       validationSchema={ Yup.object({
        name: Yup.string()
          .required('Required')
          .min(3, 'min 3 characters '),
        catg: Yup.string()
          .required('Required')
          .min(3, 'min 3 characters '),
        pic: Yup.string()
          .required('Required'),
        price: Yup.string()
          .required('Required'),
        sqft: Yup.string()
          .required('Required'),
        location: Yup.string()
          .required('Required')
          .min(3, 'min 3 characters '),
        floor: Yup.string()
          .required('Required'),

      })}
       onSubmit={ (values,x) => {
        console.log(x)
        addpropfn(values).then(res=>{
          if(res.data){ 
            alert('Property Added Successfully')
            x.resetForm()
          }
          if(res.error) 
          alert('something went wrong...')
        })
       
       }}
     >
        <Form >
          <div className='fields'>
              <label>Name: </label>
              <Field name="name"  placeholder='Enter Name'/>
              <br/>
              <div className='errormsg'><ErrorMessage name="name" /> </div>
          </div>
          <div className='fields'>
              <label>price: </label>
              <Field  name="price"   placeholder='Enter price'/> <br/>
              <div className='errormsg'> <ErrorMessage name="price" /> </div>
          </div>
          <div className='fields'>
              <label>Image: </label>
              <Field name="pic"   placeholder='Enter Image URL'/> <br/>
              <div className='errormsg'><ErrorMessage name="pic" /> </div>
           </div>
           <div className='fields'>
              <label>Category: </label>
              <Field as="select" name="catg" >
                 <option value="" disabled>Select Category</option>
                  <option value="villa">Villa</option>
                  <option value="2bhk">2BHK</option>
                  <option value="3bhk">3BHK</option>
              </Field>
              <div className='errormsg'><ErrorMessage  name="catg" /></div>
           </div> 
          <div className='fields'>
              <label>Squarefeet: </label>
              <Field  name="sqft"    placeholder='Enter Squareft' />  <br/>
              <div className='errormsg'><ErrorMessage  name="sqft" /></div>
           </div> 
           <div className='fields'>
              <label>location: </label>
              <Field  name="location"    placeholder='Enter location' />  <br/>
              <div className='errormsg'><ErrorMessage  name="location" /></div>
           </div>          
           <div className='fields'>
              <label>floor: </label>
              <Field  name="floor"    placeholder='Enter floor no' />  <br/>
              <div className='errormsg'><ErrorMessage  name="floor" /></div>
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

export default AddProperty
