import { useState } from 'react'
import './App.css'
import Box from './components/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-full flex justify-center' style={{backgroundColor: "#212223"}}>
      <div className='h-1/2 w-1/3 my-20 rounded-2xl flex flex-col justify-center relative' style={{backgroundColor: "#464f4d"}}>
        <button className='text-white bg-blue-600 p-2 w-1/7 mx-54 absolute z-10 rounded-2xl'>swap</button>
        <Box user="From" currency="usd"/>
        <Box user="To" currency="inr"/>
      </div>
      </div>
    </>
  )
}

export default App
