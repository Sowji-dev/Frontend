import React from 'react'

function Stdnts(props) {
    console.log('students comp')
  return (
    <div>
        
      <table border='2'>
        <thead>
            <th onClick={()=>props.sortStudents('firstname')}>First Name</th>
            <th onClick={()=>props.sortStudents('lastname')}>Last Name</th>
            <th onClick={()=>props.sortStudents('gender')}>Gender</th>
        </thead>
        <tbody>
            {
                props.students.map((e,i)=>
                    <tr>
                        <td>{e.firstname}</td>
                        <td>{e.lastname}</td>
                        <td>{e.gender}</td>
                        <td onClick={()=>props.removeStd(i)}>Remove</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default Stdnts
