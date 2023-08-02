import React from 'react'

function ShowTasks(props) {
  console.log(props)
  var temp=props.ar.filter(e=>{
        if(props.showOnly=='all')
          return true
        else if(e.status && props.showOnly=='true'){
          console.log('show true tasks',e.status)
          return true;
        }
        else if(!e.status && props.showOnly=='false'){
          console.log('show false tasks',e.status)
          return true;
        }
      })
  return (
    <div>
        {temp.map((e,i)=>{
            return <div key={i} style={{background: e.status ? '#88de88': 'pink'  ,marginBottom:'15px',padding:'10px'}}>
                {e.title}&nbsp; &nbsp; &nbsp;
                    <button onClick={()=>{
                      props.toggleTask(e)
                    }}>
                     {e.status ? 'Undo' : 'Done'}
                      </button>&nbsp; &nbsp; &nbsp;
                    <button onClick={()=>{
                      props.deleteTask(e)
                    }}>Delete</button>
              
              </div>
         })
        }
      
    </div>
  )
}

export default ShowTasks
