import './App.css'
import React from 'react';
import Stdnts from './Stdnts'
function App() {
  var [students,setStudents] = React.useState(
    [
      {
        firstname:'Ravi',
        lastname:'Sastri',
        gender:'male'
      },
      {
        firstname:'Sachin',
        lastname:'Tendulkar',
        gender:'male'
      },
      {
        firstname:'Mithali',
        lastname:'Raj',
        gender:'female'
      },
      {
        firstname:'Rohit',
        lastname:'Sharma',
        gender:'male'
      },
      {
        firstname:'Smriti',
        lastname:'Mandhana',
        gender:'female'
      },
      {
        firstname:'Virat',
        lastname:'Kohli',
        gender:'male'
      },
    ]);
    var [order,setOrder] = React.useState('asc')
    function sortStudents(v){
      if(order=='asc'){
        students.sort((a,b)=>{
          return a[v]<b[v]? -1 : 1
        })
        setOrder('desc')
      }
      else{
        students.sort((a,b)=>{
          return a[v]<b[v]? 1 : -1
        })
        setOrder('asc')
      }
      setStudents([...students])
    }
    function removeStd(i){
      students.splice(i,1)
      setStudents([...students])
    }
  return (
    <div >
      <h3>Sorting table header click</h3>
      <p>{order}</p>
      <Stdnts students={students} sortStudents={sortStudents}
        removeStd={removeStd}></Stdnts>
      </div>
  );
}
export default App;