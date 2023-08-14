import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { addCust } from './services/addCust'
import { custList } from './services/custList'

export const store = configureStore({
  reducer: {
    [addCust.reducerPath]: addCust.reducer,
    [addCust.reducerPath]: custList.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([addCust.middleware,custList.middleware]),
})
setupListeners(store.dispatch)