import {useState} from 'react';

function App() {

  
  const [counter, setCounter] = useState(15);

  const addCount = () => {
    if(counter < 20) setCounter(counter+1);
  }

  const removeCount = () => {
    if(counter >= 1) setCounter(counter-1);
  }

  return (
    <>
      <h1>Hello, {counter}</h1>
      <br />
      <button onClick={addCount}>Add Counter{counter}</button>
      <br />
      <button onClick={removeCount}>Decrease Counter{counter}</button>
    </>
  )
}

export default App
