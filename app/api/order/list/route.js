import db from "@/db/db";
import { NextResponse } from "next/server";
import { Order } from "@/db/models";
import { cookies } from "next/headers";

db();

export async function GET(request) {
  // const body = await request.json()
  const cookiesStore = cookies();
  const chefId = JSON.parse(cookiesStore.get("_cre").value)._id;

  const orderList = await Order.find({ chef: chefId ,approvedByChef:false});

  return NextResponse.json(orderList);
}

export async function POST(request){
    const body = await request.json()

    const orderId= body.orderId;

    const order = await Order.findByIdAndUpdate(orderId,{approvedByChef:true})

    return NextResponse.json(order)

}