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
        <div style={{border:`2px solid ${props.c}`, margin:'10px', padding:'10px'}}>
            <div>Count:{c}</div><br/>
            <button onClick={incr}>Increment</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={decr}>Decrement</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={()=>props.showCount(c)}>Show Count</button><br/>
        </div>
    )
}
export default CountProps