import { configureStore } from '@reduxjs/toolkit'
import counterR from '../features/counter/counterSlice'
import todoR from '../features/todoList/todoSlice'
export const store = configureStore({
  reducer: {
    counter:counterR,
    todo:todoR
  }
})
console.log('from store',store)