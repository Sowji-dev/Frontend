import './App.css'
import React from 'react';
import Forms from './Form/Forms';
import Skills from './skills/Skills';
import Counter from './counter/Counter';
function App() {
  const skills=['html', 'css' , 'js']
  return (
    <div >
      hello world
        {/* <Forms></Forms>
        <Skills skills={skills}></Skills> */}
        <Counter></Counter>
      </div>
  );
}
export default App;