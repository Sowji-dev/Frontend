import './App.css'
import React from 'react';
import { useState } from 'react';
function App() {
  var urls={  Apple: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWIGXrMUK0x55jWf84PFtVfG0PpNu3YbMlA&usqp=CAU',
    Mango:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLH9oGfx34_6uuD0sG9kPm7fxrcH2untzgPA&usqp=CAU',
  
  Strawberry:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lx4OJq10QDBTO17TSXD9KSaJPgPFq-pxhg&usqp=CAU',
  
  Banana: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpeFA965EtNqz8h9arKnPvC3xl4ApS_-I3cR8uhXnQmQ&s'
}
  var [imgurl,setImgurl]= useState('');
  var [frt,setFrt]= useState('');
  function clicked(e){
     frt=document.myForm.fruits;
    console.log(e.target)
    // for (var k in urls){
    //   if(k==frt){
    //     setImgurl(urls[k])
    //     setFrt(frt)
    //   }

      
    // }
  }
  return (
    <div >
      <div style={{width:'500px',height:'200px', border:'2px solid'}}>
      <form name='myForm'>
          Fruts:   
           <input name='fruits' type='checkbox' value='Apple' onChange={clicked}/>Apple
           <input name='fruits' type='checkbox' value='Mango'  onChange={clicked}/>Mango
           <input name='fruits' type='checkbox' value='Strawberry'  onChange={clicked}/>Strawberry
           <input name='fruits' type='checkbox' value='Banana'  onChange={clicked}/>Banana
        </form>
        <br/>
         {imgurl && <div>
            <img src ={imgurl} style={{height: '100px', width: '100px'}} /> <h1>{frt}</h1>
          </div>}
        
      </div>
      </div>
  );
}
export default App;