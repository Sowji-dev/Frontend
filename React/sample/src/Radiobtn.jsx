import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

function Radiobtn() {
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
              //  <form onChange={formik.handleChange}>
              <form>
                <h4>Radio buttons using formik</h4>
                <input type='radio' name='color' value='Red'  onChange={formik.handleChange}/>Red &nbsp;
                <input type='radio' name='color' value='Blue'  onChange={formik.handleChange}  />Blue &nbsp;
                <input type='radio' name='color' value='Green'  onChange={formik.handleChange}/>Green &nbsp;
                <input type='radio' name='color' value='Orange'  onChange={formik.handleChange}/>Orange &nbsp; 
                {/* <button type='submit' >Submit form</button> */}
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
export default Radiobtn
