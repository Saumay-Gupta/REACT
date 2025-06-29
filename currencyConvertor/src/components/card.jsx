import React from 'react'

function Card({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
}) {
  return (
    <div className='flex flex-col bg-white h-20 w-85 mx-auto my-auto rounded'>
        <div className='w-full flex flex-row'>
            <span className='w-1/2 text-start ml-2'>{label}</span>
             <span className='w-1/2 text-end mr-2'>Currency Type</span>
        </div>

        <div className='w-full flex flex-row h-full'>
            <input type="number" value={amount} className='w-1/2 h-1/2 mt-6 ml-2'
            onChange={(e)=> onAmountChange && onAmountChange(e.target.value)}
            />

            <div className='w-1/2 h-1/2 text-end mt-6 mr-2'>
                <select name="" id="" className='w-5/10 h-7 bg-[rgb(235,232,232)] rounded' 
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} 
                value={selectCurrency}>
                    {currencyOptions.map( (currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    </div>
  )
}

export default Card
