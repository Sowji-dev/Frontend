import './App.css'
import CountProps from './Countprops'
function App() {
  function showCount(c){
    alert('Count is:'+c)
  }
  return (
    <div>
      <h1>Props Counter </h1>
      <br/>
      <CountProps v={10} i={10} c='green' showCount={showCount}></CountProps>
      <CountProps v={5} i={5} c='blue' showCount={showCount}></CountProps>
      </div>
  );
}
export default App;