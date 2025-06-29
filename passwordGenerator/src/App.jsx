import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [pass,setPass] = useState("");
  const [passLength, setPassLength] = useState(8);
  const [numbers,setNumbers] = useState(false);
  const [characters,setCharacters] = useState(false);

  const passRef = useRef(null)

  useEffect(()=>{
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const digits = "1234567890"
    const symbols = "!@#$%^&*<>?"
    let password = "";

    if(numbers) letters+= digits;
    if(characters) letters+= symbols;

    for(let i = 0;i<passLength;i++){
      const c = Math.round(Math.random() * letters.length + 1)
      password += letters.charAt(c)
    }

    setPass(password)

  },[passLength,numbers,characters])

  const copyPassword = () => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  }
  return (
    <>
      <div className='bg-black flex flex-col items-center h-screen w-full'> 
        <h1 className='text-white font-bold text-2xl mt-10'>Password Generator</h1>
        <div className='bg-[#434040] flex flex-col h-40 w-120 mt-10 rounded'>
          <div className='flex flex-row mt-7 mx-auto'>
            <input type="text" value={pass} className='bg-white w-90 rounded h-8 p-2'/>
            <button className='bg-blue-500 rounded text-white ml-3 w-15' onClick={copyPassword}>
             COPY </button>
          </div>
          <div className='flex flex-row mx-auto mt-10'>
              <input type="range" value={passLength} onChange={(e)=>setPassLength(e.target.value)}/>
              <span className='mx-2'>{passLength}</span>

              <input type="checkbox" value={numbers} onChange={(e)=> setNumbers(!numbers)} className='ml-5'/>
              <span className='mx-2'>Numbers</span>

               <input type="checkbox" value={characters} onChange={(e)=> setCharacters(!characters)} className='ml-5'/>
              <span className='mx-2'>Characters</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
