"use client"
import React from 'react'
import Link from "next/link";

import { dish, } from '@/data'
import { items ,chefs} from '@/data/items';
import useSWR from 'swr'; 
import { fetcher } from '@/lib';
import OrderBtn from '@/components/orderBtn';

function Menu() {
    const {data, error , loading }= useSWR("/api/items",fetcher)
    if (data) {console.log(data);}

    if (data) {
        
        return (
         <>
         <h1 className='text-2xl my-5 ml-56 '>Best food around your location</h1>
         <section className='flex flex-wrap justify-around '>
          {data.map(e=>{return(
              <>
              <Card dishItem={e} />
              </>)
          })}
         </section>
         </> 
        )
    }else{
        return(<>
        <h1>Fetching items</h1>
        </>)
    }
}


function Card({dishItem}){

    // const cName= getChefName(dishItem)
    // console.log(chefs,dishItem.chefId);
    const n = chefs.find((c)=>{c.chefId==dishItem.chefId})
    // console.log(n);

    return(<>
    <div className='h-96 w-96 border border-blue-500 m-3 rounded-2xl'>
        <Link href={`/dish/${dishItem._id}`}>
    <img src={dishItem.image} alt="" className='w-full h-64  rounded-2xl' />
        </Link>
    <div className='flex justify-between'>
    	<h1 className='ml-3'> {dishItem.name}</h1>
        <h1 className='mr-3'>{dishItem.stars || 4.5}</h1>
    </div>
    <div className='flex justify-between'>
        <h1 className='ml-3'>Tags: {dishItem.tags || ""}</h1>
        <h1 className='mr-3'>price:{dishItem.price}</h1>
    </div>
    <div>
        <h1 className='ml-3'> Prepared By: 
            {/* <Link href={`/chef/${dishItem.chefId}`}> {getChefName(dishItem)}</Link> */}  
            {/* <Link href={`/chef/${dishItem.chefId}`}>{dishItem.chefId}</Link> */}
        </h1>
    </div>
    <div className='flex justify-between'>
	{/* <h1 className='ml-3'>order</h1>	 */}
    <OrderBtn dishId={dishItem._id} chef={dishItem.chef}  />
	{/* <h1 className='mr-3'>add to Cart</h1>	 */}
    </div>
    </div>
    </>)
}

export default Menu
