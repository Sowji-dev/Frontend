import './App.css'
import React from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Emp from './EmpUseFormik';
import EmpYup from './EmpYup'
import EmpGetfieldprops from './EmpGetfieldprops';
import EmpFormicComp from './EmpFormikComp';
function App() {
  return (
    <div >
     <Emp></Emp>
    <EmpYup></EmpYup>
    <EmpGetfieldprops></EmpGetfieldprops>
    <EmpFormicComp></EmpFormicComp>
      </div>
  );
}
export default App;