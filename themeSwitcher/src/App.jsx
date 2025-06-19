import './App.css'
import UserContext from './Contexts/UserContext'
import UserContextProvider from './Contexts/UserContextProvider'
import ThemeBtn from './Components/themeBtn'
import Card from './Components/card'
import { useContext, useEffect } from 'react'

function App() {

  const {theme} = useContext(UserContext)

  useEffect(()=>{
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  },[theme])

  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
