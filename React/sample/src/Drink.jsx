import React from 'react'
import ShowDrink from './ShowDrink'

function Drink(props) {
    console.log(props.i)
    var ShowDrink=false
    
  return (
    <div className='card container' >
        <div><img src={props.data.strDrinkThumb}/></div>
        <h4>{props.data.strDrink}</h4> 
        <div>{props.data.strGlass}</div>
        <div>{props.data.strAlcoholic}</div>
        <div class="">
        <button type="button" class="" 
          data-toggle="modal"  data-target={'#'+props.i+props.data.strDrink}>Open Modal</button>

          <div class="modal fade" id={props.i+props.data.strDrink} role="dialog">
            <div class="modal-dialog">
        
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <img style={{width:'500px'}} src={props.data.strDrinkThumb}/>
                </div>
                <div class="modal-body">
                  {/* <div>Name: {props.data.strDrink}</div>
                  <div>Category: {props.data.strCategory}</div>
                  <div>Category: {props.data.strCategory}</div>
                  <div>Category: {props.data.strCategory}</div> */}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
          
            </div>
          </div>
          </div>
    </div>
  )
}

export default Drink
