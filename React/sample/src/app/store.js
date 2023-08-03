import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './likes/likeSlice'
import fruitCartSlice from './fruitCart/fruitCartSlice'

export const store = configureStore({
  reducer: {
    likeSlice:likeSlice,
    fruitCartSlice:fruitCartSlice
  }
})