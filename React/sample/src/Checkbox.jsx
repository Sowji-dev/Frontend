import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
function Checkbox() {
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
            <form>
                <h4>checkbox using formik</h4>
                <input type='checkbox' name='color' value='Red'  onChange={formik.handleChange}/>Red &nbsp;
                <input type='checkbox' name='color' value='Blue'  onChange={formik.handleChange}  />Blue &nbsp;
                <input type='checkbox' name='color' value='Green'  onChange={formik.handleChange}/>Green &nbsp;
                <input type='checkbox' name='color' value='Orange'  onChange={formik.handleChange}/>Orange &nbsp; 
                {
                  formik.values.color ? <div>Selected colors:<b> {
                    formik.values.color.map((e,i)=>{
                      return <div>{i+1}. {e}</div>
                    })
                    }</b></div> : ''
                }
                
            </form>
          )
        })
      }
      </Formik>
    </div>
  )
    }
export default Checkbox
