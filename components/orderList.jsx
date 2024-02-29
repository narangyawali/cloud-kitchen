import OrderAppr from "./orderAppr";
import useSWR from "swr";
import { fetcher } from "@/lib";
import { useEffect } from "react";


function OrderItem({ order,key,mutateList }) {

	return (
			<div key={key} className="border border-orange-400 p-1 bg-white rounded-xl">
				<h1>{order.dishName}</h1>
				<h1 className="text-xl">{order.cName}</h1>
				<img
					className="rounded-xl"
					src={order.dishImage}
					alt="img"
					height={75}
					width={75}
				/>
				<h1 className="text-xl text-orange-500">{order.number}</h1>
				<OrderAppr orderId={order.orderId} mutateList={mutateList} />
			</div>

	)
}

export function OrderList({ show }) {

	const { data, error, loading ,mutate} = useSWR("/api/order/list/", fetcher);
	const mutateList=()=>{
		mutate()
		// alert("ddd")
	}
	const ol = [
		{
			id: "oid",
			dishName: "dish name",
			dishImage: "/img/thakali.jpg",
			cName: "customer name",
			number: 2,
		},
	];

	if (data) {
		console.log(data);
	}

	if (data && show) {
	// if (true) {
		return (
			<>
				<div className="border border-orange-100 h-56 min-w-96 mx-96 absolute top-56 right-1 ">
					<h1 className="text-xl text-orange-500">Orderlist</h1>

					<div className="flex p-1">
						{data.map((order) => {
							return <OrderItem order={order} key={order.orderId} mutateList={mutateList}/>
						})}
					</div>
				</div>
			</>
		);
	}
}

