import './App.css'
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './app/store';
import Counter from './features/counter/Counter';
import Todo from './features/todoList/Todo';
function App() {
  
  return (
    <Provider store={store}>
      <div className='w-50 p-3 m-auto'>
        <h2>App comp</h2>
        <Counter></Counter>
        <br/><br/>
        <Todo></Todo>
      </div>
    </Provider>
  );
}
export default App;