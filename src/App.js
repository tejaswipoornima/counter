import { useState } from "react";


function App() {
  var [count,setCount] = useState(0);
  var increment = () => {
    count+=1 ;
    setCount(count);
  }
  var decrement = () => {
    count-=1 ;
    setCount(count);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>
    </div>
  );
}

export default App;
