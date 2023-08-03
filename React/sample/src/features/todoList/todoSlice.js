import { createSlice } from '@reduxjs/toolkit'
const initialState = {
   tasks:['bus fee','Rent','Groceries','Electricity']
  }
export const todoSlice=createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.tasks.push(action.payload)
            console.log(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.tasks.splice(action.payload,1)
        }
    }
})
export const {addTodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer