import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
function Selectbox() {
  return (
    <div  className='box'>
      <Formik initialValues={{
            color:""
        }} 
        validationSchema={ Yup.object({
          
        })} 
        onSubmit={(v)=>{
          console.log(v)
      }}>

      {
        ((formik)=>{
          return(
            <form onChange={formik.handleChange}>
              <h4>select bpx using formik</h4>
              <select name="color">
                <option value="Red"  onChange={formik.handleChange}>Red</option>
                <option value="Blue"  onChange={formik.handleChange}>Blue</option>
                <option value="Green"  onChange={formik.handleChange}>Green</option>
                <option value="Orange"  onChange={formik.handleChange}>Orange</option>
              </select>
              <br/>
              {
                  formik.values.color ? <h4>Selected color:<b> {formik.values.color}</b></h4> : ''
              }
            </form>
          )
        })
      }
      </Formik>
    </div>
  )
    }

export default Selectbox
