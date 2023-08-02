import {combineReducers, createStore} from 'redux'
import TodoReducer from './TodoReducer'
import CounterReducer from './CounterReducer'
var store=createStore(combineReducers({counterR:CounterReducer,todoR:TodoReducer}));
console.log('from store:' , store)
export default store