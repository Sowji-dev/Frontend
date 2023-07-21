import './App.css'
import React, { useState } from 'react';
import FruitCart from './FruitCart';
import { func } from 'prop-types';
function App() {
  var [ar,setAr]=useState([
    {
      fruit:'Apple',
      price:30,
      quant:1,
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkcMpFljKmFvpSt9um9i4nZNZqezUS4QM6dCaBV9MCw&s'
    },
    {
      fruit:'Orange',
      price:20,
      quant:1,
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3arKs4KVQ_WopwzJ5nq2Oy7ikwP77lJaW07sgw-e2AQ&s'
    },
    {
      fruit:'Mango',
      price:35,
      quant:1,
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg-mw8ljVUi2k3AgPZ2d0cAicdl1AapXGnkqNgPxEFg&s'
    },
    {
      fruit:'Banana',
      price:10,
      quant:1,
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_So2hsq4W_J-AttLCUfRG9hsGnpINGI4Br3gQSHtW&s'
    },
    {
      fruit:'Grapes',
      price:60,
      quant:1,
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa08YoN6TzACWk4bQhHxwSZ-cqiSquzM8CwXIJtTYhiw&s'
    },
    
    {
      fruit:'Kiwi',
      price:50,
      quant:1,
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmEWwzA0H7Zo6loLvT5uNOs33kcfWC3DlH4yynDBjjw&s'
    }
    
  ])
  function inc(i){
    ar[i].quant++;
    setAr([...ar])
  }
  function dec(i){
    ar[i].quant--;
    setAr([...ar])
  }
  function resetCart(){
    ar.forEach((e,i)=>{
      e.quant=0;
    })
    setAr([...ar])
  }
  var tot=0,items=0;
  ar.forEach((e,i)=>{
    tot=tot+(e.price*e.quant)
    items=items+e.quant
  })
  
  return (
    <div className='boxBord'>
      <div className='head'><h3>Fruit Vibes</h3>
      <div className='total'>Cart total: Rs.{tot}</div>
      <div  className='items'>
         <i className="fa fa-shopping-cart"></i>
         <span>{items}</span>
      </div>
      <div  onClick={resetCart}><i className="cancel fa fa-close"></i></div>
      
     </div> 
      {
        ar.map((e,i)=>
          <div key={i}>
            <FruitCart f={e.fruit} i={i} p={e.price} q={e.quant} url={e.url}
            inc={inc} dec={dec}></FruitCart>
            </div>
        )
      }
    </div>
  );
}
export default App;