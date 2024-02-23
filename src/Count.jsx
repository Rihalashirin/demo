import React, { useState } from 'react'

export const Count = () => {
    const [count,setcount]=useState(0)
    const [data,setdata]=useState([])
    let increment=()=>{
        
         setcount(count+1)

    }
    let decrement=()=>{
        if(count!=0){
        setcount(count-1)
    }
    
    }
    let Adddata=()=>{
        setdata([
            {
                name:'rihala',
                age:22
            },
            {
                name:'varna',
                age:22
            }
        ])
    }
  return (
    <div>
         <h2>{count}</h2>
         {data.map((item)=>(
            <div>
           <h2>{item.name}</h2> 
            <h2>{item.age}</h2></div>
            ))}
        <button className='bg-orange-600 text-white  rounded-lg' onClick={increment}>increment</button><br /><br />
        <button className='bg-orange-600 text-white rounded-lg' onClick={decrement}>decrement</button><br /><br />
        <button className='bg-orange-600 text-white rounded-lg' onClick={Adddata}>Add data</button>

    </div>
  )
}
