import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { addCust } from './services/addCust'
import { custList } from './services/custList'
import { loginCust } from './services/loginCust'
import loginSlice from './slice/loginSlice'
import { addWishList } from './services/addWishList'
import { addProperty } from './services/addProperty'
export const store = configureStore({
  reducer: {
    loginSlice:loginSlice,
    [addCust.reducerPath]: addCust.reducer,
    [custList.reducerPath]: custList.reducer,
    [loginCust.reducerPath]: loginCust.reducer,
    [addWishList.reducerPath]: addWishList.reducer,
    [addProperty.reducerPath]: addProperty.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      addCust.middleware,
      custList.middleware,
      loginCust.middleware,
      addWishList.middleware,
      addProperty.middleware
    ]),
})
setupListeners(store.dispatch)