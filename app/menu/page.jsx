import React from 'react'
import Link from "next/link";

import { dish,chef } from '@/data'

function Menu() {
  return (
   <>
   <h1 className='text-2xl my-5 ml-56 '>Best food around your location</h1>
   <section className='flex flex-wrap justify-around '>
    {[1,2,3,4,5,7,6,8,9,10].map((e)=>{
        return(<>
        
		<Card dishItem={dish} route={e} />
        </>)
    })}
   </section>
   </> 
  )
}

function Card({dishItem,route}){
    return(<>
    <div className='h-96 w-96 border border-blue-500 m-3 rounded-2xl'>
        <Link href={`/dish/${route}`}>
    <img src={`img/${dishItem.img}`} alt="" className='w-full h-64  rounded-2xl' />
        </Link>
    <div className='flex justify-between'>
    	<h1 className='ml-3'> {dishItem.name}</h1>
        <h1 className='mr-3'>{dishItem.stars}</h1>
    </div>
    <div className='flex justify-between'>
        <h1 className='ml-3'>Tags: {dishItem.tags}</h1>
        <h1 className='mr-3'>price:{dishItem.price}</h1>
    </div>
    <div className='flex justify-between'>
	<h1 className='ml-3'>order</h1>	
	<h1 className='mr-3'>add to Cart</h1>	
    </div>
    </div>
    </>)
}

export default Menu
