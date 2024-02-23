import React, { useState } from 'react'

export const State = () => {
    const [count,setcount]=useState(0)
    let increment=()=>{
        setcount(count+1)

    }
    let decrement=()=>{
        setcount(count-1)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button className='bg-orange-600 text-white' onClick={increment}>increment</button>
        <button className='bg-orange-600 text-white' onClick={decrement}>decrement</button>
    </div>
  )
}
