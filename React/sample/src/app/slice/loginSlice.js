import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userdet:{

    }
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
    }
})
export const {loginsucc,logout,addWishlist}=loginSlice.actions
export default loginSlice.reducer