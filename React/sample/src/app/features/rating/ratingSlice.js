import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    stars:[0,0,0,0,0]
}
export const ratingSlice=createSlice({
    name:'rating',
    initialState,
    reducers:{
       changeRate:(state,action)=>{
        var j;
            for(j=0;j<=action.payload;j++){
                state.stars[j]=1
            }
            for(j=j;j< state.stars.length;j++)
                state.stars[j]=0


       }
    }
})
export const {changeRate}=ratingSlice.actions
export default ratingSlice.reducer