
import db from "@/db/db";
import { NextResponse } from "next/server";
import { Order ,Customer , Item} from "@/db/models";
import { cookies } from "next/headers";
db()

export async function POST(request){

  const body = await request.json()  
  const cookiesStore = cookies()
  
  const customerId = JSON.parse(cookiesStore.get("_cre").value)._id

	const res = {
		item:body.itemId,
		chef:body.chefId,
		customer:customerId,
		number:body.number
	}

	const newOrder = new Order(res)
	await newOrder.save()

	return NextResponse.json(newOrder)
}

export async function GET(request){

	const cookiesStore = cookies()
  const customerId = JSON.parse(cookiesStore.get("_cre").value)._id

  const approvedOrderList =  await Order.find({"customer":customerId})

  const list = [];

  await Promise.all(
    approvedOrderList.map(async (order) => {
      const dish = await Item.findOne({ _id: order.item });
      const customer = await Customer.findOne({ _id: order.customer });
      const individualOrder = {
        orderId: order._id,
        dishName: dish.name,
        dishImage: dish.image,
        cName: customer.name,
        number: order.number,
		dishPrice:dish.price,
      };
      list.push(individualOrder);
      // console.log(individualOrder);
    })
  );

  return NextResponse.json(list);

}
