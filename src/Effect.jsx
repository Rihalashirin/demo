 import React, { useEffect, useState } from 'react'
 
 export const Effect = () => {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)
    useEffect(()=>{
   
        console.log('in mouting pahse')
    
    
    },[]
    )
    useEffect(()=>{
        return()=>{
            console.log('in unmouting phase')
        }
    },[]
    )
    useEffect(()=>{
        console.log(count);
    },[count,count1])

    let increment=()=>{
        setCount(count+1)
    }
    let increment1=()=>{
        setCount1(count1+1)
    }
   return (
    <>
     <div>{count}</div>
     <button onClick={increment}>increment</button>
     <button onClick={increment1}>increment1</button>
     </>
   )
 }
 