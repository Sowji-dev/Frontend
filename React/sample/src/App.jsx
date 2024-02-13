import './App.css'
import React from 'react';
import myContext from './myContext';
import Child from './Child';
import Child2 from './Child2';
import Counter from './Counter';
function App() {
  
  return (
    
      <myContext.Provider value="sowji">
        <div>Parent comp</div>
        <Child></Child>
        <Child2></Child2>
        <Counter></Counter>
      </myContext.Provider>
      
   
  );
}
export default App;