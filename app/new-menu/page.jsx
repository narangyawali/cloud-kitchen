"use client"
import React from 'react'
import Link from "next/link";

import { dish, } from '@/data'
import { items ,chefs} from '@/data/items';
import useSWR from 'swr'; 
import { fetcher } from '@/lib';
import OrderBtn from '@/components/orderBtn';
import { haversine} from "@/lib"

function Menu() {
    const {data, error , loading }= useSWR("/api/items",fetcher)
	const {data:cus_data,error:cus_error,loading:cus_loading} = useSWR("/api/customer/me",fetcher)

    if (data &&cus_data) {
		// console.log(data)
		const data_with_distance = data.map((e)=>{
			let distance = haversine(cus_data.location.x,cus_data.location.y,e.chefLocation.x,e.chefLocation.y) 
			return{
				distance,
				...e
			}
		})
		const sorted_data = data_with_distance.sort((first,second)=>first.distance-second.distance)
		console.log(sorted_data)
		return(<IterateMenu data={sorted_data}/>)

	}
    else{
        return(
        <h1>Fetching items</h1>
        )

    }
}

function IterateMenu({data}){

        return (
         <div key={data.name} className="py-4">
         <h1 className='text-2xl py-5 ml-56 '>Best food around your location</h1>
         <section className='flex flex-wrap justify-around '>
          {data.map(e=>{return(
              <div key={data.name}>
              <Card dishItem={e} />
              </div>)
          })}
         </section>
         </div> 
        )
	
}

function Card({dishItem}){

    // const cName= getChefName(dishItem)
    // console.log(chefs,dishItem.chefId);
    const n = chefs.find((c)=>{c.chefId==dishItem.chefId})
    // console.log(n);

    return(<>
    <div className='h-96 w-96 border border-orange-500 m-3 rounded-2xl'>
        <Link href={`/dish/${dishItem._id}`}>
    <img src={dishItem.image} alt="" className='w-full h-60  rounded-2xl' />
        </Link>
    <div className='flex justify-between'>
    	<h1 className='ml-3'> {dishItem.name}</h1>
        <h1 className='mr-3'>{dishItem.stars || 4.5}</h1>
    </div>
    <div className='flex justify-between'>
        <h1 className='ml-3'>Tags: {dishItem.tags || ""}</h1>
        <h1 className='mr-3'>price:{dishItem.price}</h1>
    </div>
	<h1 className="mx-3">{dishItem.description}</h1>
    <div>
        <h1 className='ml-3'> Prepared By: 
             <Link href={`/chef/${dishItem.chef}`}> {dishItem.chefName}</Link> 
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
