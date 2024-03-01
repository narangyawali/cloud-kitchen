"use client"
import Link from "next/link";
import { chefs, items } from "@/data/items";
import useSWR from "swr";
import { fetcher } from "@/lib";
import Image from "next/image"
import OrderBtn from "@/components/orderBtn"

export default function IndividualChef({ params }) {

	// const chef = chefs.find((c) => c.chefId == params.slug);
	// const chefDishes = items.filter((i) => i.chefId == params.slug);
	const chefId = params.slug

	const { data, error, loading } = useSWR(`/api/chef/${params.slug}`, fetcher)

	if (data) {

		return (
			<>
				<div className="px-56 ">

					<Image src="/img/chefImg.jpg" width="120" height="120" className="rounded-[50%]" />
					<h1 className="text-2xl font-bold text-orange-500">{data.name}</h1>
					<h1 className="text-xl">Specializes in {data.cusine}</h1>
					<h1 className="text-xl font-semibold">About Chef  </h1>
					<h1 className="text-xl">{data.description}</h1>
					<div className="flex flex-row">
						<img src="/sign-open.svg" alt="" height="25" width="25" />
						<h1 className="text-xl my-3 ml-5"> Open Now</h1>
					</div>
					<h1 className="text-xl font-semibold">Chef's Menu</h1>

					<GenerateMenu chefId={chefId} />

				</div>
			</>
		)
	} else if (error) {
		return (<> <h1>Error</h1> </>)
	}
	else {
		return (<div className="">
			<img src="/loading.gif" alt="" className="h-[80vh] w-[100%]" />
		</div>)
	}
}

function GenerateMenu({ chefId }) {
	console.log(chefId);

	const { data, error, loading } = useSWR(`/api/chef/${chefId}/items`, fetcher)
	if (data) {
		console.log(data)
		return (
			<div className=" flex flex-wrap justify-evenly items-center">

				{data.map((d) => {
					return (
						<>
							<MenuItem dishItem={d} />
						</>
					);
				})}
			</div>
		)
	} else if (error) {
		return <h1> Error</h1>
	} else if (loading) {
		return <h1>{console.log(loadingItems)}Loading items</h1>

	}

}

export function MenuItem({ dishItem }) {
	const generateStars = () => {

		return (Math.floor(Math.random() * 9 + 1))
	}
	return (
		<>

			{
				<div className="h-[30rem] w-96 border border-orange-200 m-3 rounded-2xl hover:scale-110 transition duration-700 ">
					{

						<Link href={`/dish/${dishItem._id}`}>
							<img
								src={dishItem.image}
								alt=""
								className="w-full h-60  rounded-3xl p-2"
							/>
						</Link>
					}
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
					<div className="flex justify-between my-2">
						{/* <h1 className='ml-3'>order</h1>	 */}
						<OrderBtn dishId={dishItem._id} chef={dishItem.chef} />
						{/* <h1 className='mr-3'>add to Cart</h1>	 */}
					</div>
				</div>
			}
		</>

	);
}
