import { fetcher } from '@/lib'
import React from 'react'
import useSWR from 'swr'

function OrderReport() {

  const {data, error , loading}= useSWR("/api/order/",fetcher)
  if (data) {
    console.log(data);
    return (
      <>
      <div className='flex justify-end'>
        {data.map((order)=>{
          return(<>
          
                  <div className="border border-blue-400 p-1">
                    <h1>{order.dishName}</h1>
                    <img
                      src={order.dishImage}
                      alt="img"
                      height={175}
                      width={175}
                    />
                    <h1>{order.number}</h1>
                  </div>
  
          </>)
        })}
      </div>
  
      </>
    )
    
  }
}

export default OrderReport