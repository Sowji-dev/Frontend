import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import likeSlice from './features/likes/likeSlice'
import fruitCartSlice from './features/fruitCart/fruitCartSlice'
import ratingSlice from './features/rating/ratingSlice'
import darkmodeSlice from './features/darkmode/darkmodeSlice'
import { productsApi } from '../services/productsApi'
import { countriesApi } from '../services/countreiesApi'
import { studentsApi } from '../services/studentsApi'

export const store = configureStore({
  reducer: {
    likeSlice:likeSlice,
    fruitCartSlice:fruitCartSlice,
    ratingSlice:ratingSlice,
    darkmodeSlice :darkmodeSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  
    getDefaultMiddleware().concat([productsApi.middleware,countriesApi.middleware,
      studentsApi.middleware]),
    // getDefaultMiddleware().concat(countriesApi.middleware)
  
})
setupListeners(store.dispatch)