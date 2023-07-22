import './App.css'
import React, { useState } from 'react';
import Articles from './Articles';

function App() {
  var [theme,setTheme]=useState('white')
  const articles = [
    {
      id: 1,
      title: 'the WET Codbase',
      date: new Date(2020, 9, 4),
      length: 11,
      snippet: `Come waste your time with me`,
    },
    {
      id: 2,
      title: 'goodby, clean code',
      date: new Date(2019, 10, 22),
      length: 5,
      snippet: `Let clean code guide you. Then let it go.`,
    },
    {
      id: 3,
      title: 'my decade in review',
      date: new Date(2018, 7, 11),
      length: 5,
      snippet: `A personal reflection.`,
    },
    {
      id: 4,
      title: 'what are the react team principles',
      date: new Date(2015, 5, 4),
      length: 5,
      snippet: `UI Before API.`,
    },
  ]
  
  function changeTheme(){
   theme= theme=='gray' ? 'white' : 'gray'
    setTheme(theme)
  }
  return (
    <div style={{background:theme}}>
        <label className="switch">
          <input type="checkbox" onClick={changeTheme}/>
          <span className="slider round"></span>
        </label>
        {
          articles.map((e,i)=>
            <Articles e={e}></Articles>
          )
        }
      </div>
  );
}
export default App;