import './App.css'
import React from 'react';
function Arrayprot() {
Array.prototype.getFirst2Letter = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i][0].toLowerCase()+this[i][1].toLowerCase();
  }
};
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.getFirst2Letter();
console.log(fruits)
  return (
    <div >First 2 leters<br/>
      {fruits.toString()}
      
      </div>
  );
}
export default Arrayprot;