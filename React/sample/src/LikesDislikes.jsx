import { useState } from "react"

function LikesDislikes(props){
    var [c,setC]=useState(props.c)
    function clickLikeDislike(){
        setC(c+1)
    }
    return(
        
            <div className={props.clas}onClick={clickLikeDislike}>{props.v}{c}</div>
        
    )
}
export default LikesDislikes