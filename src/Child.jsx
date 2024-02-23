import React from 'react'


export const Child = (props) => {
  return (
    <div className={` h-[20rem] mt-11 pt-6 w-[20rem] text-center ${props.cls}`}>
       <img className='w-56 m-auto h-56 rounded-[50%]' src={props.img} alt="" />
        <div className='text-xl'>{props.name}</div>
        <div className='text-lg'>{props.job}</div>
    </div>
    
  )
}
