import React from 'react'

function News(props) {
 console.log(props.ar)
  return (
    <div className='cards'>
      <div>{props.ar.title}</div>
    </div>
  )
}

export default News
