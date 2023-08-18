import React, { useState } from 'react'
import AddFeedback from './myForms/AddFeedback'
import EditCust from './myForms/EditCust'
function ShowDetails(props) {
    console.log(props)
    var details=props.details
    var [editForm, showEditForm]=useState(false)
    var [addfeedback, setAddFeedback]=useState(false)
    console.log(details)
  return (
    <div className=' '>
       {
         !editForm  && 
          <div>
            <h3>customer details</h3>
            <h5>Customer ID:{details.id}</h5>
            <h3>Name: {details.fullname}</h3>
            <h3>Phone: {details.phone}</h3>
            <h3>Email: {details.email}</h3>
            <h3>Place: {details.place}</h3>
            <h3>Feedback: 
              {
                  details.feedback.map(e=><>{e}</>)
              }</h3>
              <button onClick={()=>{showEditForm(true)}}>Edit Details</button>
              {
                !addfeedback &&
                <button onClick={()=>{setAddFeedback(true)}}>Add Feedback</button>
              }
              {/* {
                addfeedback && !editForm && <AddFeedback details={details}></AddFeedback>
              } */}
          </div>
       }
       <div>
       {
        editForm &&
        <div> <EditCust details={details}></EditCust>    </div>
      }
      
       </div>
        
   
      
     
    </div>
  )
}

export default ShowDetails
