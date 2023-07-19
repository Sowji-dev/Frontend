
function TodoProps(props){
    console.log(props)
   
    return(
        <div>
            <input type='text' id='mytask' placeholder="Enter task"/>
            <button onClick={()=>{props.addTask(document.getElementById('mytask').value)}}>Add task</button>
           
            {
                props.ar.map((e,i)=>
                    <div  key={i} >
                    <li style={{backgroundColor: e.paid==true?'green':'rgb(60 168 204)'}}  className='tasks'>
                        {e.task}
                        <button onClick={()=>{props.done(i)}}>Done</button>
                        <button onClick={()=>{props.clear(i)}}>Clear</button>
                    </li>
                    </div>
                )
            }
            
        </div>
    )
}
export default TodoProps