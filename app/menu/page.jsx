import React from 'react'

import { dish,chef } from '@/data'

function Menu() {
  return (
   <>
   <h1 className='text-2xl my-5'>Best food around your location</h1>
   <section className='flex flex-wrap justify-around '>
    {[1,1,1,1,1,1,1,1,1,1,1].map(()=>{
        return(<>
        
		<Card/>
        </>)
    })}
   </section>
   </> 
  )
}

function Card(){
    return(<>
    <div className='h-96 w-96 border border-blue-500 m-3'>
    <h1>card</h1>
    </div>
    </>)
}

export default Menu
