import './App.css'
import React from 'react';
import { useState } from 'react';
import PropsObj from './PropsObj'
function App() {
  return (
    <div className='team_box'>
       <h2>Object Props</h2>
      <PropsObj ob={{
        team:'Mumbai',
        players:["Rohit" , "surya" ,"kishan" , "bhumra","david"]
      }}></PropsObj>
       <PropsObj ob={{
        team:'Royal Challengers Bengaluru',
        players:["Virat" , "surya" ,"Maxi" , "bhumra","Siraj"]
      }}></PropsObj>
      <PropsObj ob={{
        team:'Sunrisers Hyderabad',
        players:["Kane Williamson" , "Manish" ,"kishan" , "bhumra","david"]
      }}></PropsObj>
      <PropsObj ob={{
        team:'Chennai Super Kings',
        players:["Dhoni" , "surya" ,"Jadeja" , "bhumra","Rayudu"]
      }}></PropsObj>
      </div>
  );
}
export default App;