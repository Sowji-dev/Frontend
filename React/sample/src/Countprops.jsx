import { useState } from "react"
function CountProps(props){
    console.log(props)
    var [c,setC]=useState(props.i)
    function incr(){
        setC(c+props.v)
    }
    function decr(){
        setC(c-props.v)
    }
    return(
        <div>
            <div>Count:{c}</div>
            <button onClick={incr}>Increment</button>
            <button onClick={decr}>Increment</button>
        </div>
    )
}
export default CountProps