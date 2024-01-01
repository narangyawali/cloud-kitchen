"use client"

import { useState } from "react"

export default function OrderBtn({dishId,chef}) {
	const [show , setShow]= useState(false)
	const [number , setNumber]= useState(1)
  

  const placeOrder= async(role)=>{
    // const { data, error, isLoading} = useSWR("/api/chef/login",fetcher)
		const data = await fetch(`/api/order/`,{
      method:"POST",
      headers:{
        'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        item:dishId,
        chef:chef,
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
    className="w-16 h-8 border border-blue-500">
        Order 
    </button>  
    <div className={show?"visible":"hidden"}>

    <div className="border border-blue-400">
        <input 
        onChange={(e)=>{setNumber(e.target.value)}}
        type="number" placeholder="No Of Order" />
    </div>
    <button
    
     className="h-6  border border-blue-500 bg-blue-200">
        Place Order
    </button>
    </div>
  </>
  )
}
