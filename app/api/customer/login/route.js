
import { NextResponse } from "next/server";
import { Customer } from "@/db/models";
import db from "@/db/db";
import { cookies } from "next/headers";
db();

export async function POST(request) {
  const body = await request.json();
  const customer = await Customer.findOne({
    email: body.email,
    password: body.password,
  });
  //   console.log(body);
  if(!customer){
		return NextResponse.json({error:"customer not found"},{status:404})
	}
  const name = customer?.name || "fnamelogin";
  cookies().set("fname", name,{expires: Date.now() + 60*60*24*30*1000});
  // cookies().set("fname", name,{expires:new Date(2024-3-1)});
  cookies().set("ischef", "false",{expires: Date.now() + 60*60*24*30*1000});
  cookies().set("_cre", JSON.stringify(customer),{expires: Date.now() + 60*60*24*30*1000});
  console.log(JSON.stringify(customer));
  return NextResponse.json(customer);
}


