import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Nav from './app/features/Nav';
function App() {
  
  return (
    <div className='navdiv'>
      
      {/* <h3 className='hdng'>Westernhills Housing Corporation</h3> */}
      <Nav></Nav>
    <Outlet></Outlet>
         
        
    </div>
  );
}
export default App;