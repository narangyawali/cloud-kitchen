
import { items } from "@/data/items"
import { getChefName } from "@/lib"
import Link from "next/link"

export default function ParticularDish({params}) {

  const item = items.find((i)=>i.id==params.slug)
  const cName = getChefName(item)
  return (
  <>
    <h1> route is: {params.slug}</h1>
  	<div className='mx-64'>
        <img src={item.image} alt="img" className="h-56"/>
        <h1 className='text-3xl my-3'>{item.name}</h1>
        <h1 className='text-2xl my-3'>{item.price}</h1>
        <h1 className='text-xl my-3'>Prepared by: 
        <Link href={`/chef/${item.chefId}`}>
        {cName} 
        </Link>
        </h1>
        <h1 className='text-xl my-3'>Open Now</h1>
        <button className='border border-blue-600 h-8 w-24 mb-11 bg-blue-500 rounded-2xl'> Add to cart</button>
    </div>
  </>
  )
}
