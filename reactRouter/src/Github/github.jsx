import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/Saumay-Gupta`)
        .then((res) => res.json())
        .then((data) => setData(data))
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center'>
        GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default GitHub
