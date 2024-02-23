import React from 'react'
import { Child } from './Child'
import img from './greenery.jpg'

export const Parent = () => {
  return (
    <div className='  gap-6 flex flex-wrap justify-center'>
        <Child img={img} cls='bg-slate-500' name='adam john' job='developer'></Child>
        <Child img={img} name='adam john' job='developer'></Child>
        <Child img={img} cls='bg-slate-500' name='adam john' job='developer'></Child>
        <Child img={img} cls='bg-slate-500' name='adam john' job='developer'></Child>
        <Child img={img} name='adam john' job='developer'></Child>
        <Child img={img} cls='bg-slate-500' name='adam john' job='developer'></Child>
    </div>
    
  )
}

