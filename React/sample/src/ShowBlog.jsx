import { useState } from "react"
import LikesDislikes from "./LikesDislikes"
function ShowBlog(props){
    console.log(props)
    return(
        <div>
           {
            props.ar.map((e,i)=>
            <div  className="blogborder">
                <h3>{e.title}</h3>
                <div>{e.content}</div>
                <div className='count'>
                 <LikesDislikes c={e.likes} v='Likes:' clas='likes'></LikesDislikes>
                <LikesDislikes c={e.dislikes} v='Dislikes: ' clas='dislikes'></LikesDislikes>
                </div>
            </div>)
           }
        </div>
    )
}
export default ShowBlog