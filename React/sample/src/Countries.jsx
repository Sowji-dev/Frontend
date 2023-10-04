import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useGetUrlData from './useGetUrlData'
function Countries() {
  var data=useGetUrlData( 'https://restcountries.com/v3/all')
  console.log(data)
  return (
  <div>
    {
      data.map(e=>{
        return <span>{e.name.common}---</span>
      })
    }
  </div>
  )
}

export default Countries
