import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin:false
}
export const loginSlice= createSlice({
    name:'login',
    initialState,
    reducers:{
        loginsucc:(state,action)=>{
            state.isLogin=true
        }
        
    }
})
export const {loginsucc}=loginSlice.actions
export default loginSlice.reducer