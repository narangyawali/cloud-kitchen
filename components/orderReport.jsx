import { fetcher } from "@/lib";
import React from "react";
import useSWR from "swr";

function OrderCard({ order, key }) {
  const handleButtonClick =  ({price}) => {
    const path = "https://uat.esewa.com.np/epay/main";
    const params = {
      amt: price || 100,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: price || 100,
      pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
      scd: "EPAYTEST",
      su: "http://merchant.com.np/page/esewa_payment_success",
      fu: "http://merchant.com.np/page/esewa_payment_failed"
    };

    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in params) {
      const hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };
	const handlePayment = async ({price}) => {
		console.log("payment");
		const path = "https://uat.esewa.com.np/epay/main";
		// const path = "http://localhost:3000/profile";
		const params = {
			amt: price || 100,
			psc: 0,
			pdc: 0,
			txAmt: 0,
			tAmt: price || 100,
			pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
			scd: "EPAYTEST",
			su: "http://merchant.com.np/page/esewa_payment_success",
			fu: "http://merchant.com.np/page/esewa_payment_failed",
		};
		const newTab = window.open('','_blank');
		const response = await fetch(path,{
			method:"POST",
			headers:{
				"content-Type":"application/json",
				body:JSON.stringify(params)
			}
		})
		newTab.location.href= path

	};

	return (
		<div key={key} className="border border-orange-500 p-1 m-2 rounded-2xl">
			<h1>{order.dishName}</h1>
			<img
				className="rounded-2xl "
				src={order.dishImage}
				alt="img"
				height={175}
				width={175}
			/>
			<h1>{order.number}</h1>
			<h1>RS: {order.number * order.dishPrice}</h1>
			<button
				className="p-1 bg-orange-500 rounded-2xl "
				onClick={() => {
					const totalPrice = order.number*order.dishPrice
					// handlePayment(totalPrice);
						handleButtonClick({price:totalPrice})
				}}
			>
				{" "}
				Proceed to Payment
			</button>
		</div>
	);
}

function OrderReport() {
	const { data, error, loading } = useSWR("/api/order/", fetcher);
	if (data) {
		console.log(data);
		return (
			<>
				<div className="flex justify-end">
					{data.map((order) => {
						return <OrderCard order={order} key={order._id} />;
					})}
				</div>
			</>
		);
	}
}

export default OrderReport;
