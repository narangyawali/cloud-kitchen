
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

 cookies().set("fname", "chf",{expires: Date.now() + 60*60*24*30*1000});
 cookies().set("ischef", "false",{expires: Date.now() + 60*60*24*30*1000});
 cookies().set("_cre", customer,{expires: Date.now() + 60*60*24*30*1000});
 cookies().set("fname","chf",{expires: Date.now() + 60*60*24*30*1000})
console.log(body);
return NextResponse.json(customer)


}
