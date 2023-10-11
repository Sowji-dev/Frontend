import './App.css'
import React from 'react';
import Forms from './Form/Forms';
import Skills from './skills/Skills';
function App() {
  const skills=['html', 'css' , 'js']
  return (
    <div >
      hello world
        <Forms></Forms>
        <Skills skills={skills}></Skills>
      </div>
  );
}
export default App;