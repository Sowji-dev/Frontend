import './App.css'
import React from 'react';
import formik from 'module'
function App() {
  var formik=useFormik({

  })
  return (
    <div >
      <h3>Form validations using formik and yup</h3>
      <label>User name</label>
      <input type='text' name='myname' placeholder='Enter name' />

      <label>Password</label>
      <input type='password' name='pwd' placeholder='Enter Password' />

      </div>
  );
}
export default App;