"use client"

import { items } from "@/data/items"
import { fetcher, getChefName } from "@/lib"
import Link from "next/link"
import useSWR from "swr"
import OrderBtn from "@/components/orderBtn"

export default function ParticularDish({params}) {

  const item = items.find((i)=>i.id==params.slug)
  const url=`/api/items/${item}`
  // const cName = getChefName(item)

  const {data, error, loading}= useSWR(`/api/items/${params.slug}`,fetcher)

    // <OrderBtn dishId={dishItem._id} chef={dishItem.chef}  />
  if (data) {
    
    return (
    <>
      {/* <h1> route is: {params.slug}</h1> */}
      <div className='mx-64'>
          <img src={data.image} alt="img" className="h-56"/>
          <h1 className='text-3xl my-3'>{data.name}</h1>
          <h1 className='text-2xl my-3'>Rs: {data.price}</h1>
          <h1 className='text-xl my-3'>Prepared by: 
          <Link href={`/chef/${data.chef}`}>
          {  "chefName"} 
          </Link>
          </h1>
          <h1 className='text-xl my-3'>Open Now</h1>
			<OrderBtn dishId={data._id} chef={data.chef}  />
			<br/>
          <button className='border border-blue-600 h-8 w-24 mb-11 bg-blue-500 rounded-2xl'> Add to cart</button>
      </div>
    </>
    )
  
  }else if(error){
    return(<>
    <h1>error </h1>
    </>)
  }else{
    return(<>
    <h1>Loading</h1>
    </>)
  }

}
