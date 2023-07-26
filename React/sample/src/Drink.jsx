import React from 'react'

function Drink(props) {
    console.log(props)
  return (
    <div class='card'>
        <div><img src={props.data.strDrinkThumb} /></div>
      <h4>{props.data.strDrink}</h4> 
      <div>{props.data.strGlass}</div>
      <div>{props.data.strAlcoholic}</div>
      
    </div>
  )
}

export default Drink
