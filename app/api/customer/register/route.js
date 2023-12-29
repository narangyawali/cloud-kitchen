
import { NextResponse } from "next/server";
import { Customer } from "@/db/models";
import db from "@/db/db";
import {cookies} from "next/headers"
db()
export async function POST(request) {
    const body = await request.json()
  const customer = new Customer({
    email: body.email,
    password: body.password,
  });

  await customer.save();

 cookies().set("fname", "chf");
 cookies().set("ischef", "false");
 cookies().set("_cre", customer);
 cookies().set("fname","chf")
console.log(body);
return NextResponse.json(customer)


}
