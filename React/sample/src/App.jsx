import './App.css'
import React, { useState } from 'react';
import {useEffect} from 'react';
import axios from 'axios'
import Question from './Question';
function App() {
  var [data,setData]=useState([])
  var [scoreAr,setScoreAr]=useState([])
  var [mrk,setmrk]=useState(0)

  useEffect(()=>{
   axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple').
   then(res=>{
    setData((res.data.results))
   })
  },[])
  data.forEach((e,i)=>{
    scoreAr.push(false)
  })
  function corctCount(i,b){
     scoreAr[i]=b==true ? true : false;
     mrk=scoreAr.reduce((a,b)=>{
      return a+b
     },0)
     setmrk(mrk)
     setScoreAr([...scoreAr])
    //console.log(mrk)
   
  }
  
  return (
    <div >
      Correct Answers: <h2><b>{mrk}/{data.length}</b></h2><br/>
      {
        data.map((e,i)=>
          <Question d={e} key={i} pos={i} corctCount={corctCount}></Question>
        )
      }
        
      </div>
  );
}
export default App;