import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    c: 0
}
export const counterSlice=createSlice({
    name: 'countr',
    initialState,
    reducers: {
        increment: (state) => {
            state.c++
          },
          decrement: (state) => {
            state.c--
          }
    }
})
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer