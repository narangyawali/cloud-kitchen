"use client"
import CollectionHome from "@/components/collectionHome";
import Image from "next/image";
import Link from "next/link"

export default function Home() {


	const arr = [
		{
			"img":"/awards.svg",
			"heading":"Quality Maintain",
			"description":"Uncompromising standards,Best Quality, delighting every customer, every time."
		},
		{
			"img":"/screen-search-desktop.svg",
			"heading":"Easy To Order",
			"description":"Streamlined and effortless ordering. Easy To Order, your satisfaction guaranteed."
		},
		{
			"img":"/chef.svg",
			"heading":"Expert Chef",
			"description":"Uncompromising standards,Best Quality, delighting every customer, every time."
		},
		{
			"img":"/delivery-fast.svg",
			"heading":"Fastest Delivery ",
			"description":"Get your orders lightning quick. Fastests Delivery, No waiting around!"
		},
	]				
	return (
		<>
			<section className="mx-64 py-12">
				<div className="flex justify-between items-center">

					<div className="flex flex-col justify-center items-center">
						<h1 className="text-2xl">Everything is Better With</h1>
						<h1 className="text-2xl text-orange-500 text font-semibold">Good Meal</h1>
						<h1 className="mt-28 w-96 mb-10"> A digital platform that connects skilled home chefs with eager customers. We provide a platform for users to connect with skilled home chefswho offer healthier, more personalized dining options, and high-quality meals. </h1>
						<h1 className="">  </h1>
						<h1> </h1>
					</div>
					<div>
						<img src="/img/frontimg.webp" alt="ddd" className="h-72 rounded-3xl" />
					</div>
				</div>

				<h1 className="text-center mt-5 text-xl">Checkout</h1>
				<h1 className="text-center text-2xl text-orange-500 font-semibold">Our Best Sellers</h1>
				{
					<CollectionHome/>
				}
				<div className="flex items-center justify-center my-7">
				<Link href="/new-menu" className="bg-orange-500 p-3 rounded-xl font-semibold text-white" >View Our Menu </Link>
				</div>

				<div className=" my-5 py-8">
					<h1 className="text-center mt-5 text-xl">Why Choose Us </h1>
					<h1 className="text-center text-2xl text-orange-500 font-semibold mb-3">Why We Are The Best</h1>
					<div className="flex justify-around items-center ">

						{
							arr.map((e)=>{
								return(
								<div key={e.heading} className="bg-white h-48 w-48 p-4 rounded-xl ">
									<Image height="35" width="35" src={e.img} className="" />
									<h1 className="text-[12px] font-bold">{e.heading}</h1>
									<h1 className="text-xs"> {e.description}</h1>
								</div>)
							})
						}

					</div>
				</div>

				<h1 className="text-center mt-5">Our Story</h1>
				<h1 className="text-center text-2xl font-semibold text-orange-500 ">About Us </h1>
				<h1 className="text-center mx-44">Home Based Food Service is an online web-based platform that provides high-quality and personalized home-cooked food. This platform not only satisfies the growing demand for convenient services for customers but also plays a pivotal role in supporting women in becoming successful home-based entrepreneurs. We provide a platform for users to connect with skilled home chefs	who offer healthier, more personalized dining options, and high-quality meals.</h1>
				<h1 id="contact" className="text-center mt-5">Our Misson</h1>
				<h1 className="text-center text-2xl text-orange-500 font-bold">Objectives </h1>
				<h1 className="text-center mx-44">To provide high quality, personalized home cooked food</h1>
				<h1 id="contact" className="text-center mt-5">Don't Hesitate</h1>
				<h1 className="text-center text-2xl text-orange-500 font-bold">Contact Us </h1>
				<h1 className="text-center">+977987654321</h1>
			</section>
		</>
	);
}
