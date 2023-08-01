import { Link, Outlet } from 'react-router-dom';
import './App.css'
import React from 'react';
function App() {
  
  return (
    <div >
      <h4>App comp</h4>
      <h3>
          <Link to='/form'>Form</Link> &nbsp;&nbsp;&nbsp;
          <Link to='/todo'>Todo list</Link>&nbsp;&nbsp;&nbsp;
          <Link to='/countries'>Countries</Link>&nbsp;&nbsp;&nbsp;
      </h3>
      
      <Outlet></Outlet>
    </div>
  );
}
export default App;