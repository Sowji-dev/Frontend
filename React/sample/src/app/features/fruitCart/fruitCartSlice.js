import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fruits:[
        {
          fruit:'Apple',
          price:30,
          quant:1,
          url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkcMpFljKmFvpSt9um9i4nZNZqezUS4QM6dCaBV9MCw&s'
        },
        {
          fruit:'Orange',
          price:20,
          quant:1,
          url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3arKs4KVQ_WopwzJ5nq2Oy7ikwP77lJaW07sgw-e2AQ&s'
        },
        {
          fruit:'Mango',
          price:35,
          quant:1,
          url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg-mw8ljVUi2k3AgPZ2d0cAicdl1AapXGnkqNgPxEFg&s'
        },
        {
          fruit:'Banana',
          price:10,
          quant:1,
          url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_So2hsq4W_J-AttLCUfRG9hsGnpINGI4Br3gQSHtW&s'
        },
        {
          fruit:'Grapes',
          price:60,
          quant:1,
          url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa08YoN6TzACWk4bQhHxwSZ-cqiSquzM8CwXIJtTYhiw&s'
        },
        
        {
          fruit:'Kiwi',
          price:50,
          quant:1,
          url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmEWwzA0H7Zo6loLvT5uNOs33kcfWC3DlH4yynDBjjw&s'
        }
      ]
}
export const fruitCartSlice= createSlice({
    name:'fruitCart',
    initialState,
    reducers:{
        inc:(state,action)=>{
            state.fruits[action.payload].quant++
        },
        dec:(state,action)=>{
            state.fruits[action.payload].quant--
        },
        resetCart:(state)=>{
            state.fruits.forEach((e,i)=>{
                e.quant=0;
              })
        }
    }
})
export const {inc,dec,resetCart}=fruitCartSlice.actions
export default fruitCartSlice.reducer