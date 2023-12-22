import React from 'react'

export default function ParticularDish({params}) {
  return (
  <>
    <h1> route is: {params.slug}</h1>
  	<div className='mx-64'>
        <img src={`/img/thakali.jpg`} alt="img" />
        <h1 className='text-3xl my-3'> Thakali khana set</h1>
        <h1 className='text-2xl my-3'>Price Rs 650</h1>
        <h1 className='text-xl my-3'>Open Now</h1>
        <button className='border border-blue-600 h-8 w-24 mb-11 bg-blue-500 rounded-2xl'> Add to cart</button>
    </div>
  </>
  )
}
