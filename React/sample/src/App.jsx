import './App.css'
import React, { useRef } from 'react';
function App() {
  var ref1=useRef()
  return (
    <div >
        <h3>Calculator App</h3>
        <input type='text' ref='ref1'/>
      </div>
  );
}
export default App;