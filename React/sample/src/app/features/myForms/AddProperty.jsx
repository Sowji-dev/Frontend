import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAddPropertyMutation } from '../../services/addProperty';
function AddProperty() {
  var [addpropfn]=useAddPropertyMutation()
  var housetype=["2BHK","3BHK","Villa","Duplex","Triplex","1BHK"]
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
                 {
                     housetype.map(e=>{
                      return  <option value={e}>{e}</option>
                    })
                }
              </Field>
              <div className='errormsg'><ErrorMessage  name="catg" /></div>
           </div> 
          <div className='fields'>
              <label>Area: </label>
              <Field  name="sqft"    placeholder='Enter in Squareft' />  <br/>
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