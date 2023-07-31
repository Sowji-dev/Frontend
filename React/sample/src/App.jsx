import { Link, Outlet } from 'react-router-dom';
import './App.css'
import React from 'react';
function App() {
  
  return (
    <div >
        <h4>App component</h4>
        <a href='./thankyou' >Thankyou</a> 
        <Outlet></Outlet>
        <a href='./feedback' >Feedback</a>
      <br/>
      <Link to='./thankyou'>Thankyou</Link>
      <Link to='./feedback' >Feedback</Link>
      </div>
  );
}
export default App;