"use client"
import  Link  from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib";

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
    	<img src={dish.image} className="w-full h-40" alt="" />
        <div className="flex justify-between">
          <h1 className="ml-3"> {dish.name}</h1>
          <h1 className="mr-3">{dish.stars || 4.5}</h1>

        </div>
        <div className="flex justify-between">
          <h1 className="ml-3">Tags: {dish.tags || ""}</h1>
          <h1 className="mr-3">price:{dish.price}</h1>
        </div>
      </div>
    </>
  );
}

export {GenerateMenu}
