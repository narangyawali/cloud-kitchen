"use client"
import React from "react";

import { fetcher } from "@/lib";
import useSWR from "swr";
import Link from "next/link";

function List({ data:newData }) {
	const data = newData.slice(0,2)
	console.log(data)	
	return (
	data.map((dish)=>{
	// console.log(dish)
	return (
		<Link key={dish.name} href={`/dish/${dish._id}`}>

		<div className="h-64 w-64 my-8 mx-5 ">
				{console.log(dish.name)}
			<img src={dish.image} className="w-full h-40 rounded-2xl" alt="" />
			<div className="flex flex-col justify-between">
				<h1 className="ml-3 font-semibold"> {dish.name}</h1>
				<h1 className="ml-3 font-semibold"> <strong className="text-orange-500">RS: </strong>{dish.price}</h1>
			</div>
		</div>

				</Link>

	);
	}))
}

export default function CollectionHome() {
	const { data, error, loading } = useSWR(`/api/items`, fetcher);
	if (data) {
		return <div className="flex justify-center items-center ">
			<List data={data}/>
		</div>;

	}else{
		console.log("error in generating menu for home page")
	}
}

