import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    like: 0,
    dislike: 0
}
export const likeSlice=createSlice({
    name:'likes',
    initialState,
    reducers:{
        incLike: (state) => {
            state.like++;
        },
        incdisLike: (state) => {
            state.dislike++;
        }
    }
})
export const {incLike,incdisLike}=likeSlice.actions
export default likeSlice.reducer