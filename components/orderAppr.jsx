
import React from 'react'
import { useState } from 'react';

function OrderAppr({orderId}) {
  const [tick,setTick]= useState("")
  const [order,setOrder] = useState(orderId)
  

const approveOrder = async (orderId) => {
  
  const data = await fetch(`/api/order/list`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId:order
    })
  });
  // const status = await data.status()
  const result = await data.json();
  console.log(result);
  // setTick(result)
};
  return (<>
		<input type="button" value="Approve" onClick={approveOrder} className='border border-blue-400'/>
    <h1>{tick?"☑️":""}</h1>
    {/* <h1>{orderId}</h1> */}
  </>
  )
}

export default OrderAppr