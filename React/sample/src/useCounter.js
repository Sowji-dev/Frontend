import { useState } from 'react'

function useCounter(initval=0,val=1) {
    const [c,setC]=useState(initval)
    function incr(){
        console.log(initval)
        setC(c+val)
    }
    function decr(){
        setC(c-val)
    }
    return [c,incr,decr]
}

export default useCounter
