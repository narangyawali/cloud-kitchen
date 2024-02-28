import Image from "next/image";

export default function Home() {


	const arr = [
		{
			"img":"/facebook.svg",
			"heading":"Quality Maintain",
			"description":"Uncompromising standards,Best Quality, delighting every customer, every time."
		},
		{
			"img":"/facebook.svg",
			"heading":"Easy To Order",
			"description":"Streamlined and effortless ordering. Easy To Order, your satisfaction guaranteed."
		},
		{
			"img":"/facebook.svg",
			"heading":"Expert Chef",
			"description":"Uncompromising standards,Best Quality, delighting every customer, every time."
		},
		{
			"img":"/facebook.svg",
			"heading":"Fastest Delivery ",
			"description":"Get your orders lightning quick. Fastests Delivery, No waiting around!"
		},
	]				
	return (
		<>
			<section className="mx-64 py-12">
				<div className="flex justify-between">

					<div>
						<h1 className="text-2xl">Everything is Better With</h1>
						<h1 className="text-2xl text-orange-500 text font-semibold">Good Meal</h1>
						<h1 className="mt-28"> A digital platform that connects skilled home chefs with eager customers. </h1>
						<h1 className="">  </h1>
						<h1> </h1>
					</div>
					<div>
						<img src="/img/thakali.jpg" alt="ddd" className="h-72 rounded-3xl" />
					</div>
				</div>

				<h1 className="text-center mt-5">Checkout</h1>
				<h1 className="text-center text-2xl text-orange-500 font-semibold">Our Best Sellers</h1>

				<div className=" border-2 border-orange-200 my-5 py-8">
					<h1 className="text-center mt-5">Why Choose Us </h1>
					<h1 className="text-center text-2xl text-orange-500 font-semibold">Why We Are The Best</h1>
					<div className="flex justify-around items-center ">

						{
							arr.map((e)=>{
								return(
								<div key={e.heading} className="bg-white h-44 w-44 p-4 rounded-xl ">
									<Image height="22" width="22" src={e.img} />
									<h1 className="text-[12px] font-bold">{e.heading}</h1>
									<h1 className="text-xs"> {e.description}</h1>
								</div>)
							})
						}

					</div>
				</div>

				<h1 className="text-center mt-5">Our Story</h1>
				<h1 className="text-center text-2xl font-semibold text-orange-500 ">About Us </h1>
				<h1 className="text-center mx-44">Home Based Food Service is an online web-based platform that provides high-quality and personalized home-cooked food. This platform not only satisfies the growing demand for convenient services for customers but also plays a pivotal role in supporting women in becoming successful home-based entrepreneurs.</h1>
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
