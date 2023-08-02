import { Provider } from 'react-redux';
import './App.css'
import React from 'react';
import store from './Store/Store';
import Counter from './Counter';
import Todo from './Todo';
function App() {
  //console.log('app :',store)
  return (
    <div >
      <Provider store={store}>
        <h3>App comp</h3>
        <Counter></Counter>
        <Todo></Todo>
      </Provider>
      </div>
  );
}
export default App;