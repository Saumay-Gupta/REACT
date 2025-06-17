import React from 'react';

function Box(props){
    return(
        <>
            <div className='bg-white h-3/10 w-8/10 my-2 mx-12 rounded-xl flex'>
                <div>
                <p className='text-gray-600 mx-3 my-1'>{props.user}</p>
                <input type="text" defaultValue={0} className='mx-3 my-10'/>
                </div>
                <div className='h-1/2 w-5/10 mx-3'>
                <p className='text-gray-600 mx-10 my-1'>Currency Type</p>
                <select name="currency" id="currency" defaultValue={props.currency} className='my-9 mx-15 bg-gray-300 rounded-xl w-21 h-8'>
                    <option value="inr">inr</option>
                    <option value="usd">usd</option>
                </select>
                </div>
            </div>
        </>
    )
}

export default Box;