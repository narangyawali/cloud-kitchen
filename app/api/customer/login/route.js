
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
  const name = customer?.name || "fnamelogin";
  cookies().set("fname", name);
  cookies().set("ischef", "false");
  cookies().set("_cre", JSON.stringify(customer));
  console.log(JSON.stringify(customer));
  return NextResponse.json(customer);
}


