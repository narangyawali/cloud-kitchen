"use client"

import { useState } from "react"

export default function OrderBtn({dishId,chef}) {
	const [show , setShow]= useState(false)
	const [number , setNumber]= useState(1)
  const [item,setItem]= useState(dishId)
  const [chefid,setChefid]= useState(chef)
  

  const placeOrder= async()=>{
    // const { data, error, isLoading} = useSWR("/api/chef/login",fetcher)
    console.log(item,chefid,number);
		const data = await fetch(`/api/order/`,{
      method:"POST",
      headers:{
        'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        itemId:item,
        chefId:chefid,
        number:number
    
      })
    })
    const result = await data.json()
    console.log(result);

  }


  return (
  <>

	<button 
    onClick={()=>{setShow(!show)}}
    className="w-16 h-8 rounded-xl bg-orange-500 text-black	 hover:text-white ml-2 ">
        Order 
    </button>  
    <div className={show?"visible":"hidden"}>

    <div className="border border-blue-400">
        <input 
        value={number}
        onChange={(e)=>{setNumber(e.target.value)}}
        type="number" placeholder="No Of Order" />
    </div>
    <button
   		onClick={placeOrder} 
     className="h-6  border border-blue-500 bg-blue-200">
        Place Order
    </button>
    </div>
  </>
  )
}
