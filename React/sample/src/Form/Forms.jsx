import React from 'react'

function Forms() {
  return (
    <div>
        
      <form>
        <input type='text' placeholder='enter name' role="namefield"/>

        <input type='checkbox'/>I agree to terms & conditions
        <button>Submit</button>
        <button role='sumbitbutton'>Proceed</button>
      </form>
    </div>
  )
}

export default Forms
