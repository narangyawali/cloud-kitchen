"use client";

import { items } from "@/data/items";
import { fetcher, getChefName } from "@/lib";
import Link from "next/link";
import useSWR from "swr";
import OrderBtn from "@/components/orderBtn";

export default function ParticularDish({ params }) {
  const item = items.find((i) => i.id == params.slug);
  const url = `/api/items/${item}`;
  // const cName = getChefName(item)

  const { data, error, loading } = useSWR(`/api/items/${params.slug}`, fetcher);

  // <OrderBtn dishId={dishItem._id} chef={dishItem.chef}  />
  if (data) {
    console.log(data);

    return (
      <>
        {/* <h1> route is: {params.slug}</h1> */}
        <div className="mx-56 flex flex-row   pt-16">
          <div className="mr-10 hover:scale-110 transition-all duration-1000  ">
            <img src={data.image} alt="img" className="h-72 rounded-3xl" />
          </div>
          <div className="ml-10">
            <h1 className="text-3xl my-3 font-semibold">{data.name}</h1>
            <h1 className="text-2xl w-[30rem]">{data.description}</h1>
            <h1 className="text-2xl my-3 font-semibold">
              <span className="text-orange-500">RS: </span>
              {data.price}
            </h1>
            <h1 className="text-xl my-3 font-semibold">
              Prepared by:
              <Link href={`/chef/${data.chef}`} className="text-orange-500">
                {`  ${data.chefName}`}
              </Link>
            </h1>
            <div className="flex flex-row">
              <img src="/sign-open.svg" alt="" height="25" width="25" />
              <h1 className="text-xl my-3 ml-5"> Open Now</h1>
            </div>
            <OrderBtn dishId={data._id} chef={data.chef} />
            <br />

            {
              // <button className='border border-blue-600 h-8 w-24 mb-11 bg-blue-500 rounded-2xl'> Add to cart</button>
            }
          </div>
        </div>
      </>
    );
  } else if (error) {
    return (
      <>
        <h1>error </h1>
      </>
    );
  } else {
    return (
      <>
        <img src="/loading.gif" alt="" className="h-[80vh] w-[100%]" />
      </>
    );
  }
}
