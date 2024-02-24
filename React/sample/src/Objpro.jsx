import React from 'react'

function Objpro() {
    Object.prototype.getfullname=function(){
       return this.fname+" "+ this.lname
    }
    Object.prototype.getAge=function(){
        return 2024-this.dob
     }
    function Student(fname,lname,dob) {
        this.fname =fname;
        this.lname =lname;
        this.dob=dob
    }
    let s1 = new Student("lakshmi","sowjanya",2000)
    let s2 = new Student("suresh","kumar",1994)
    console.log(s1.getfullname(), s1.getAge())
    console.log(s2.getfullname(), s2.getAge())
  return (
    <div>
      hi
    </div>
  )
}

export default Objpro
