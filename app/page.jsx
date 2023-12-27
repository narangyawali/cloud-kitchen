import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="mx-64 py-12">
        <div className="flex justify-between">

        <div>
          <h1 className="text-2xl">Everything is Better With</h1>
          <h1 className="text-2xl text-orange-500 text font-semibold">Good Meal</h1>
          <h1 className="mt-28"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h1>
          <h1 className="">  ipsum dolor, sit amet consectetur adipisicing elit. </h1>
          <h1>consectetur adipisicing elit. Veritatis accusantium sed minus officia </h1>
        </div>
        <div>
          <img src="/img/thakali.jpg" alt="ddd" className="h-72 rounded-3xl" />
        </div>
        </div>

        <h1 className="text-center mt-5">Checkout</h1>
        <h1 className="text-center text-2xl text-orange-500 font-semibold">Our Best Sellers</h1>

        <h1 className="text-center mt-5">Our Story</h1>
        <h1 className="text-center text-2xl font-semibold text-orange-500 ">About Us </h1>
					<h1 className="text-center mx-44">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium sed minus officia temporibus quae impedit laudantium molestiae architecto esse, natus maxime doloribus accusamus! Accusamus, quos minima. Ullam, ipsum recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium sed minus officia temporibus quae impedit laudantium molestiae architecto esse, natus maxime doloribus accusamus! Accusamus, quos minima. Ullam, ipsum recusandae?</h1>
				

        <h1 id="contact" className="text-center mt-5">Don't Hesitate</h1>
        <h1 className="text-center text-2xl text-orange-500 font-bold">Contact Us </h1>
        <h1 className="text-center">+977987654321</h1>
      </section>
    </>
  );
}
