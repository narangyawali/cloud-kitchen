import db from "@/db/db";
import { NextResponse } from "next/server";
import { Order, Item, Customer } from "@/db/models";
import { cookies } from "next/headers";

db();

export async function GET(request) {
  // const body = await request.json()
  const cookiesStore = cookies();
  const chefId = JSON.parse(cookiesStore.get("_cre").value)._id;

  const orderList = await Order.find({ chef: chefId, approvedByChef: false });

  const list = [];

  await Promise.all(
    orderList.map(async (order) => {
      const dish = await Item.findOne({ _id: order.item });
      const customer = await Customer.findOne({ _id: order.customer });
      const individualOrder = {
        orderId: order._id,
        dishName: dish.name,
        dishImage: dish.image,
        cName: customer.name,
        number: order.number,
      };
      list.push(individualOrder);
      console.log(individualOrder);
    })
  );

  return NextResponse.json(list);
}



export async function POST(request) {
  const body = await request.json();

  const orderId = body.orderId;

  const order = await Order.findByIdAndUpdate(orderId, {
    approvedByChef: true,
  });

  return NextResponse.json(order);
}
