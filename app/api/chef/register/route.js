import { NextResponse } from "next/server";
import { Chef } from "@/db/models";
import db from "@/db/db";
import {cookies} from "next/headers"
db()
export async function POST(request) {
    const body = await request.json()
  const chef = new Chef({
    email: body.email,
    password: body.password,
  });

  await chef.save();

 cookies().set("fname", "chf");
 cookies().set("ischef", "true");
 cookies().set("_cre", chef);
 cookies().set("fname","chf")
console.log(body);
return NextResponse.json({"mail":request.body.email})


}
