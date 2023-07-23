import { func } from 'prop-types';
import './App.css'
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
function App() {
  var [ar,setAr]=useState([
    {
      fruit:'Apple',
      price:30,
      quant:1, 
    },
    {
      fruit:'Mango',
      price:45,
      quant:1, 
    },
    {
      fruit:'Papaya',
      price:30,
      quant:1, 
    },
    {
      fruit:'Banana',
      price:10,
      quant:1, 
    },
    {
      fruit:'Orange',
      price:20,
      quant:1, 
    }
  ])
  var grandtot=0
  ar.forEach((e,i) => {
    e.tot=e.price*e.quant;
    grandtot=grandtot+e.tot;
  });
  useEffect(()=>{
    document.getElementById('0').focus()
    ar.forEach((e,i)=>{
      document.getElementById(i).value=e.quant
    })
  },[])
  function changeQuant(event,i){
    grandtot=0
    ar[i].quant=document.getElementById(i).value;
    ar[i].tot=ar[i].price*ar[i].quant
    setAr([...ar])  
  }
  
  function keyDown(event,i){
    if(i<ar.length-1){
       console.log(event.key);
       if(event.key=='Enter')
          document.getElementById(i+1).focus()
    }
  }
  return (
    <div style={{padding: '10px'}}>
      <h3>React-food-cart-billing-level1</h3>
      <br/>
      <table border='3' style={{margin:'auto'}}>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </thead>
        <tbody>
          {
            ar.map((e,i)=>
              <tr key={i}>
                <td>{e.fruit}</td>
                <td>{e.price}</td>
                <td style={{padding: '10px'}}>
                  <input type='number' id={i}  min='0' pattern="[0-9]*"
                      onChange={(event)=>{changeQuant(event,i)}}
                       onKeyDown={(event)=>{keyDown(event,i)}} />
                </td>
                <td>{e.tot}</td>
              </tr>
            )
          }
          <tr >
            <td colSpan='4' style={{textAlign:'right',padding: '10px'}}>Total: <b>{grandtot}</b></td>
          </tr>
        </tbody>
      </table>
      {/* <input type='text' id='myId' onKeyUp={clicked}/> */}
      </div>

  );
}
export default App;