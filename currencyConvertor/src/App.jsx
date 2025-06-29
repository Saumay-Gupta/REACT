import { useEffect, useRef, useState } from 'react'
import './App.css'
import Card from './components/card'
import useCurrencyInfo from './hook/useCurrencyInfo';

function App() {

  const [amount,setAmount] = useState(0);
  const [from, setFrom] = useState("usd"); 
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  return (
    <>
    <div className='h-screen w-full bg-black flex flex-col items-center'>
      <h1 className='text-white text-2xl font-bold mt-10'>Currency Convertor</h1>
      <div className='flex flex-col h-70 w-100 bg-[#6e6969] items-center mt-5 rounded'>
        <form onSubmit={(e)=> {e.preventDefault(); convert();}} className='flex flex-col h-full w-full items-center'>
          <Card label="From" amount={amount} onAmountChange={(amount)=> setAmount(amount)} onCurrencyChange={(currency)=> setAmount(amount)}
            selectCurrency={from}
            currencyOptions={options}          
          />
          <button onClick={swap} className='bg-blue-500 text-white w-18 h-7 rounded'>
            Swap &uarr;&darr;
          </button>
          <Card label="To" amount={convertedAmount}  onCurrencyChange={(currency)=> setTo(currency)}
            selectCurrency={to}
            currencyOptions={options} 
            />
          <button type='submit' className='bg-blue-500 text-white w-50 h-10 rounded mb-2'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
      </div>
    </div>
  </>
  )
}

export default App
