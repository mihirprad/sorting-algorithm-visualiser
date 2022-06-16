
import './App.css';
import Grid from './Grid';
import {useState} from 'react';
function App() {
  const [toggle,setToggle] = useState(true)
  let nums = [1,2,3,4,1,4];
  return (
    <div className="App">
      <Grid nums={nums}/>
    </div>
  );
}

export default App;
