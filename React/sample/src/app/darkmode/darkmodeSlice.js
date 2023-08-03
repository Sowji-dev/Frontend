import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    theme:'light'
}
export const darkmodeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeMode: (state) => {
            state.theme=(state.theme=='light' ? 'dark' : 'light');
        }
    }
})
export const {changeMode}=darkmodeSlice.actions
export default darkmodeSlice.reducer