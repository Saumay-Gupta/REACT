import React from 'react';

function Box({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    // amountDisable = false,
    // currencyDisable = false,
}){
    return(
        <>
            <div className='bg-white h-3/10 w-8/10 my-2 mx-12 rounded-xl flex'>

                <div className='h-10/10 flex flex-col'>
                    <p className='text-gray-600 mx-3 my-1'>{label}</p>
                    <input type="number" className='mx-3  mt-auto mb-3 ' value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                    />
                </div>

                <div className='h-1/2 w-5/10 flex flex-col items-end mr-4'>
                    <p className='text-gray-600 my-1'>Currency Type</p>
                    <select name="currency" id="currency" className='my-9  bg-gray-300 rounded-xl w-21 h-8'
                        value ={selectCurrency} 
                        onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Box;