import React from 'react'
import Moment from 'moment';

function Articles(props) {
    console.log(Moment)
    console.log(props.e);
    var d=new Date(props.e.date)
  return (
    <div>
        {/* <Moment format="dddd Do, YYYY">1976-04-19T12:59-0500</Moment> */}
       <div>
            <div> {props.e.title} </div>
            <div>{d.getDate()}th
            {d.getDay()}-
            {d.getFullYear()}
            </div>
            <div>
                {props.e.length}
            </div>
            <div>{props.e.snippet}</div> 
        </div>
     </div>
  )
}

export default Articles

