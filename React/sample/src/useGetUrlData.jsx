import axios from 'axios'
import React, { useEffect, useState } from 'react'
function useGetUrlData(url) {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(url).then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])
    return data
}

export default useGetUrlData
