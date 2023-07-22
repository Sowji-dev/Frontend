import React from 'react'

function Question(props) {
   console.log(props)
   //console.log('Question comp')
    var max=3, min=0,ar=[]
    //var p=Math.floor(Math.random() * (max - min)) + min;
    var p=1
    var {crct=props.d.correct_answer,incrct=props.d.incorrect_answers} = props.d
    incrct.map((e,i)=>{
            if(i==p)
                 ar.push(crct) 
            ar.push(e)
        }
    )
    // for (let i = ar.length - 1; i > 0; i--) { 
    //     const j = Math.floor(Math.random() * (i + 1)); 
    //     [ar[i], ar[j]] = [ar[j], ar[i]]; 
    //   } 
    function clickOpt(e){
        if(e.target.defaultValue==crct) 
             props.corctCount(props.pos,true) 
        else
            props.corctCount(props.pos,false) 
    }   
  return (
    <div>      
      {props.d.question}<br/>
      <div style={{display:'inline-flex'}}>
        {ar.map((e,i)=>
            <div key={i}>
                    <input type='radio' value={e} name={props.pos} onChange={clickOpt}/>
                    &nbsp;{e}&nbsp;&nbsp;&nbsp;&nbsp;
            
            </div>
        )}
      </div>
       <br/> <br/>
    </div>
  )
}

export default React.memo(Question)
