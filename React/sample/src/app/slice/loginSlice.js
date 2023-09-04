import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userdet:{

    },
    checkli:[],
    checkloc:[]
}
export const loginSlice= createSlice({
    name:'login',
    initialState,
    reducers:{
        loginsucc:(state,action)=>{
            console.log(action.payload)
            state.userdet={...action.payload}
        },
        logout:(state)=>{
            state.userdet={}
        },
        updateWish:(state,action)=>{
            console.log(action.payload)
            state.userdet={...action.payload}
        },
        updCheckList:(state,action)=>{
            console.log(action.payload)
            state.checkli=[...action.payload]
        },
        updLocpref:(state,action)=>{
            console.log(action.payload)
            state.checkli=[...action.payload]
        },
    }
})
export const {loginsucc,logout,updateWish,updCheckList,updLocpref}=loginSlice.actions
export default loginSlice.reducer