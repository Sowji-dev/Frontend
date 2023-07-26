import React from 'react'
import ShowDrink from './ShowDrink'

function Drink(props) {
    console.log(props.i)
    var ShowDrink=false
    
  return (
    <div className='card ' >
        <div><img src={props.data.strDrinkThumb}/></div>
        <h4>{props.data.strDrink}</h4> 
        <div>{props.data.strGlass}</div>
        <div>{props.data.strAlcoholic}</div>
        <div class="">
        <button type="button" class="btn-success" 
          data-toggle="modal"  data-target={'#'+props.i+props.data.strDrink}>Details</button>

          <div class="modal fade" id={props.i+props.data.strDrink} role="dialog">
            <div class="modal-dialog">
        
              <div class="modal-content">
                
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  
                <div class="modal-body">
                  <img style={{width:'300px'}} src={props.data.strDrinkThumb}/>
                  <div>
                    <div>Name: {props.data.strDrink}</div>
                    <div>Category: {props.data.strCategory}</div>
                    <div>Info: {props.data.strAlcoholic}</div>
                    <div>Glass: {props.data.strGlass}</div>
                    <div>Instructons : {props.data.strInstructions}</div>
                  </div>
                  </div>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
               
                  
                
                
              </div>
          
            </div>
          </div>
          </div>
    </div>
  )
}

export default Drink
