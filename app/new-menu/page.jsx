"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { dish } from "@/data";
import { items, chefs } from "@/data/items";
import useSWR from "swr";
import { fetcher } from "@/lib";
import OrderBtn from "@/components/orderBtn";
import { haversine } from "@/lib";
import { useCookies } from "react-cookie";


function AllMenu(){
	const [cookies, setCookie, removeCookie] = useCookies();
	// const isChef = cookieStore.get("ischef")
		console.log(cookies)
	if(cookies.ischef === false){
		return <Menu/>
	}else{
		return(
		<h1 className="text-center text-4xl">Try Logging From Customer Account</h1>
		)
	}
}

function Menu() {
	const { data, error, loading } = useSWR("/api/items", fetcher);
	const {
		data: cus_data,
		error: cus_error,
		loading: cus_loading,
	} = useSWR("/api/customer/me", fetcher);

	if (data && cus_data) {
		// if (false) {
		// console.log(data)
		const data_with_distance = data.map((e) => {
			let distance = haversine(
				cus_data.location.x,
				cus_data.location.y,
				e.chefLocation.x,
				e.chefLocation.y,
			);
			return {
				distance,
				...e,
			};
		});
		const sorted_data = data_with_distance.sort(
			(first, second) => first.distance - second.distance,
		);
		console.log(sorted_data);
		return <IterateMenu data={sorted_data} />;
	} else {
			return (
				<div className="">
					<img src="/loading.gif" alt="" className="h-[80vh] w-[100%]" />
				</div>
			);
	}
}

function IterateMenu({ data }) {
	return (
		<div key={data.name} className="py-4">
			<h1 className="text-2xl py-5 ml-56 ">Best food around your location</h1>
			<section className="flex flex-wrap justify-around ">
				{data.map((e) => {
					return (
						<div key={data.name}>
							<Card dishItem={e} />
						</div>
					);
				})}
			</section>
		</div>
	);
}

function Card({ dishItem }) {
	// const cName= getChefName(dishItem)
	// console.log(chefs,dishItem.chefId);
	const n = chefs.find((c) => {
		c.chefId == dishItem.chefId;
	});
	const generateStars = () => {
		return Math.floor(Math.random() * 9 + 1);
	};
	// console.log(n);

	return (
		<>
			<div className="h-[30rem] w-96 border border-orange-200 m-3 rounded-2xl hover:scale-110 transition duration-700 ">
				<Link href={`/dish/${dishItem._id}`}>
					<img
						src={dishItem.image}
						alt=""
						className="w-full h-60  rounded-3xl p-2"
					/>
				</Link>
				<div className="flex font-bold justify-between mb-2">
					<h1 className="ml-3"> {dishItem.name}</h1>
					<div className="flex flex-row ">
						<Image height="17" width="17" src="/star.svg" className="mr-3" />
						<h1 className="mr-3">{dishItem.stars || `9.${generateStars()}`}</h1>
					</div>
				</div>
				<div className="flex justify-between mb-2">
					<h1 className="ml-3 ">Tags: {dishItem.tags || ""}</h1>
					<h1 className="mr-3 text-orange-500 font-semibold">{`RS:   ${dishItem.price}`}</h1>
				</div>
				<h1 className="mx-3">{dishItem.description}</h1>
				<div>
					<h1 className="ml-3 font-semibold my-2">
						{" "}
						Prepared By:
						<Link href={`/chef/${dishItem.chef}`} className="text-orange-500">
							{" "}
							{dishItem.chefName}
						</Link>
						{/* <Link href={`/chef/${dishItem.chefId}`}>{dishItem.chefId}</Link> */}
					</h1>
				</div>
				<div className="flex justify-between my-2">
					{/* <h1 className='ml-3'>order</h1>	 */}
					<OrderBtn dishId={dishItem._id} chef={dishItem.chef} />
					{/* <h1 className='mr-3'>add to Cart</h1>	 */}
				</div>
			</div>
		</>
	);
}

export default AllMenu;
