import './App.css'
import CountProps from './Countprops'
function App() {
  
  return (
    <div>
      <div>Props Counter </div>
      <CountProps v={10} i={10}></CountProps>
      <CountProps v={5} i={5}></CountProps>
      </div>
  );
}
export default App;