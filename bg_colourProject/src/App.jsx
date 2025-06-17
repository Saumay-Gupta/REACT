import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState("black")
  return (
    <>
      <div className="w-full h-screen"
      style={{backgroundColor: colour}}
      ></div>
      <div className='text-black' style={{backgroundColor: "white"}}>
          <button className="p-2" style={{backgroundColor: "red"}} onClick={()=>setColour("red")}>RED</button>
          <button className="p-2" style={{backgroundColor: "green"}} onClick={()=>setColour("green")}>GREEN</button>
          <button className="p-2" style={{backgroundColor: "yellow"}} onClick={()=>setColour("yellow")}>YELLOW</button>
          <button className="p-2" style={{backgroundColor: "orange"}} onClick={()=>setColour("orange")}>ORANGE</button>
      </div>
    </>
  )
}

export default App
