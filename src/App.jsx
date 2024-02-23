import React from 'react'
import './App.css'
import img from './greenery.jpg'
import { Cards } from './Cards'

export const App = () => {

let a=[
    {title:'sdas',body:'khhghjkh'},
    {title:'uihbn',body:'khhghjkh'},
    {title:'sdas',body:'khhghjkh'},
    {title:'sdas',body:'khhghjkh'},
    {title:'sdas',body:'khhghjkh'},
]


  return (
   <>
   <div className='flex  gap-3'>

{a.map((item)=>(

<Cards title={item.title} image={img} cls='bg-black text-white w-25' body={item.body}/>

)
 


)}

  

   </div>
   </>
  )
}
