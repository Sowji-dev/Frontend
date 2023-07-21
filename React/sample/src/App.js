import './App.css'
import React from 'react';
import Countries from './Countries'
import Products from './Products'
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    console.log('App use effect with no DA')
})
  useEffect(()=>{
    console.log('App use effect with empty DA')
},[])

  return (
    <div className='box'>
      <Products></Products>
      <Countries></Countries>
      </div>
  );
}
export default App;