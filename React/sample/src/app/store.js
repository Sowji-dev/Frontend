import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './likes/likeSlice'
import fruitCartSlice from './fruitCart/fruitCartSlice'
import ratingSlice from './rating/ratingSlice'
import darkmodeSlice from './darkmode/darkmodeSlice'
export const store = configureStore({
  reducer: {
    likeSlice:likeSlice,
    fruitCartSlice:fruitCartSlice,
    ratingSlice:ratingSlice,
    darkmodeSlice :darkmodeSlice 
  }
})