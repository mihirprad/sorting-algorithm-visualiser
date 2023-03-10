
import './App.css';
import Grid from './Grid';
import {useState} from 'react';
function App() {
  const [toggle,setToggle] = useState(true)
  const [nums,setNums] = useState([4,1,2,4,8]);

  const quickSort = (array) =>{
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const leftArray = [];
  const rightArray = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  const sortedLeft = quickSort(leftArray);
  const sortedRight = quickSort(rightArray);

  const sortedArray = sortedLeft.concat([pivot], sortedRight);
  console.log(sortedArray);
  return sortedArray;
}

  const sortArray = () => {
    const steps = quickSort(nums);
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setNums(steps[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };
  

  return (
    <div className="App">
      <Grid nums={nums}/>
      <button onClick={sortArray}>Sort</button>
    </div>
  );


  
}

export default App;


