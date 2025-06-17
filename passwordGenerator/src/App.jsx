import { useCallback, useState , useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(
    ()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(numberAllowed) str += "1234567890"
      
      if(characterAllowed) str += "!@#$%^&*"

      for(let i = 0;i<length;i++){
        let char = Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(char)
      }

      setPassword(pass)
    }
    ,
    [length,numberAllowed,characterAllowed,setPassword]
  )

  useEffect(
    ()=>{
      passwordGenerator()
    }
    ,
    [length,numberAllowed,characterAllowed,passwordGenerator]
  )

  const copyPasswordToClipboard = useCallback(
    ()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    }
    ,
    [password]
  )
  return (
    <>
      <div className='w-full h-screen flex justify-center' style={{backgroundColor: "#1b1919"}}>
        <div className='h-1/4 w-1/3 bg-gray-600 my-20'>
          <h1 className='text-white text-center my-5 text-2xl'>Password Generator</h1>

            <input type="text" value={password} className='bg-white mx-3 w-90' readOnly ref={passwordRef}/>
            <button className='text-white bg-blue-500 px-4 py-0.9' onClick={copyPasswordToClipboard}>Copy</button>

            <br />

            <input type="range" className='mx-3 my-6 cursor-pointer' value={length} min={6} max={50} 
            onChange={(e) => setLength(e.target.value)}/>
            <label className='text-white'>({length})</label>

            <input type="checkbox" className='ml-10 mr-1' 
            id="numberAllowed" defaultChecked={numberAllowed}
            onChange={(prev)=> setNumberAllowed((prev) => !prev)}
            />
            <label className='text-white'>Numbers</label>

            <input type="checkbox" className='ml-10 mr-1' 
            id="characterAllowed" defaultChecked={characterAllowed}
            onChange={(prev)=> setCharacterAllowed((prev) => !prev)}
            />
            <label className='text-white'>Characters</label>
            </div>
      </div>
    </>
  )
}

export default App
