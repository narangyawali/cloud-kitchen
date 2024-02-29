"use client"

import { useState } from "react"
import toast from "react-hot-toast"

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
	if(data.status ==200){
		toast.success("order placed succefully")
	}else{
		toast.error("unable to place order")
		}
    const result = await data.json()
	console.log("placing order")
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

    <div className="border border-orange-200 rounded-2xl my-2">
        <input 
		className="rounded-2xl p-1"
        value={number}
        onChange={(e)=>{setNumber(e.target.value)}}
        type="number" placeholder="No Of Order" />
    </div>
    <button
		onClick={placeOrder}
		className="  border border-orange-200 bg-orange-300 hover:bg-orange-600 hover:text-white p-1 rounded-xl ml-40">
        Place Order
    </button>
    </div>
  </>
  )
}
