import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind Test</h1>
      <Card username="Code" rating="07" price="70"/>
      <Card username="Chai" rating="17" price="10"/>
    </>
  )
}

export default App
