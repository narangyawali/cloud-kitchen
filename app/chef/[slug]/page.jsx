"use client"
import  Link  from "next/link";
import { chefs, items } from "@/data/items";
import useSWR from "swr";
import { fetcher } from "@/lib";

export default function IndividualChef({ params }) {

  // const chef = chefs.find((c) => c.chefId == params.slug);
  // const chefDishes = items.filter((i) => i.chefId == params.slug);
  const chefId= params.slug

  const {data, error, loading}= useSWR(`/api/chef/${params.slug}`,fetcher)
  
  if (data) {
    
    return (
      <>
      <div className="px-56 ">
        {/* <h1>{params.slug}</h1> */}

        <h1 className="text-xl"> Name Of the chef: {data.name}</h1>
        <h1 className="text-xl">Preferred Cusine :{data.cusine}</h1>
        <h1 className="text-xl">Chef's Menu</h1>

        <GenerateMenu chefId={chefId}/>


        {/* <div className=" flex flex-wrap justify-evenly items-center">
          
          {chefDishes.map((d) => {
            return (
              <>
              <MenuItem dish={d} />
              </>
              );
            })}
          </div> */}
      </div>
    </>
  )
}else if(error){
  return(<> <h1>Error</h1> </>)
}
else{
  return(<><h1>Loading chef</h1></>)
}
}

function GenerateMenu({chefId}){
  console.log(chefId);
  
  const {data, error, loading}= useSWR(`/api/chef/${chefId}/items`,fetcher)
  if (data) {
  return(
        <div className=" flex flex-wrap justify-evenly items-center">
          
          {data.map((d) => {
            return (
              <>
                <MenuItem dish={d} />
              </>
            );
          })}
        </div>
        )
  }else if (error){
    return <h1> Error</h1>
  }else if (loading){
    return <h1>{console.log(loadingItems)}Loading items</h1>

  }

}

export function MenuItem({ dish }) {
  return (
    <>
      <div className="h-64 w-64 my-8 mx-5 border border-blue-500">
      
        {/* don't know why Link is not working here */}
        <Link href={`/dish/${dish._id}`}>
    	<img src={dish.image} className="w-full h-40" alt="" />
        </Link>


        <div className="flex justify-between">
          {/* <Link href={`/dish/${dish.id}`}> */}
          <h1 className="ml-3"> {dish.name}</h1>
          {/* </Link> */}
          <h1 className="mr-3">{dish.stars || 4.5}</h1>

        </div>
        <div className="flex justify-between">
          <h1 className="ml-3">Tags: {dish.tags || ""}</h1>
          <h1 className="mr-3">price:{dish.price}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="ml-3">order</h1>
          <h1 className="mr-3">add to Cart</h1>
        </div>
      
      </div>
    </>
  );
}
