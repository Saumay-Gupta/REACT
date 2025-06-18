import { useState } from 'react'
import './App.css'
import Box from './components/Box'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className='h-screen w-full flex justify-center' style={{backgroundColor: "#212223"}}>
        <div className='h-6/10 w-1/3  rounded-2xl flex flex-col justify-center ' style={{backgroundColor: "#464f4d"}}>
          <form onSubmit={(e) => {e.preventDefault(); convert()}} className='flex flex-col items-center justify-center'>
              <Box label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setAmount(amount)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
                />
              <button onClick={swap} className='text-white bg-blue-600 p-2 w-1/7 mx-54 absolute z-10 rounded-2xl'>swap</button>
            <Box label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to }/>
            <div className="mt-auto flex justify-center mb-3">
              <button type='submit' className='bg-blue-400 text-white rounded-xl px-4 py-2'>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
