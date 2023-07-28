import './App.css'
import React, { useState } from 'react';
function App() {
  var [score,setScore]=useState(0)
  var [runs,setRuns]=useState(0)
  function add(i){
    setScore(score+i)
  }
  function addWicket(){
    setRuns(runs+1)
  }
  return (
    <div >
      <h4>Cricket Score:<b> {score}/{runs}</b></h4>
      <button onClick={()=>add(0)}> 0</button>
      <button onClick={()=>add(1)}> 1</button>
      <button onClick={()=>add(2)}> 2</button><br/>
      <button onClick={()=>add(3)}> 3</button>
      <button onClick={()=>add(4)}> 4</button>
      <button onClick={()=>add(6)}> 6</button><br/>
      <button onClick={addWicket}> Wicket</button>
      <button onClick={()=>add(1)}> WideBall</button>
      <button onClick={()=>add(1)}> No Ball</button>
      </div>
  );
}
export default App;