import { useField } from 'formik'
import React from 'react'

function Radiobtn() {
    var [colors,setColors]=[]
    var formik=useFormik({
        initialValues:{
            color:''
        },
        validate:validateColors,
        onSubmit:(v=>{
            console.log('hi')
        })

    })
  return (
    <div>
    <h4>Radio buttons</h4>
    <span>Colors:</span>&nbsp;
    <form action="">
      <input type='radio' name='color' value='red' />Red &nbsp;
      <input type='radio' name='color' value='Blue' />Blue &nbsp;
      <input type='radio' name='color' value='Green' />Green &nbsp;
      <input type='radio' name='color' value='Orange'/>Orange &nbsp;
      <div>Selected colors: {colors}</div>
    </div>
  )
}

export default Radiobtn
