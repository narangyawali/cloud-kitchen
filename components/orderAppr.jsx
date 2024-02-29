import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

function OrderAppr({ orderId,mutateList }) {
  const [tick, setTick] = useState(true)
  const [order, setOrder] = useState(orderId);

  const approveOrder = async (orderId) => {
    const data = await fetch(`/api/order/list`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: order,
      }),
    });
    // const status = await data.status()
    if (data.status == 200) {
      toast.success("order approved");
		mutateList()
    } else {
      toast.error("unable to approve order, please refress and check");
    }
    const result = await data.json();
    console.log(result);
    // setTick(result)
  };
  return (
    <>
      <input
        type="button"
        value="Approve ☑️"
        onClick={approveOrder}
        className="border border-orange-400 bg-orange-500 p-1 rounded-2xl cursor-pointer"
      />
      {/* <h1>{orderId}</h1> */}
    </>
  );
}

export default OrderAppr;
