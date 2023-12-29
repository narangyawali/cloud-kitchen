import { NextResponse } from "next/server";
import { Chef } from "@/db/models";
import db from "@/db/db";
import { cookies } from "next/headers";
db();

export async function POST(request) {
  const body = await request.json();
  const chef = await Chef.findOne({
    email: body.email,
    password: body.password,
  });
  //   console.log(body);
  const name = chef?.name || "fnamelogin";
  cookies().set("fname", name);
  cookies().set("ischef", "true");
  cookies().set("_cre", JSON.stringify(chef));
  console.log(JSON.stringify(chef));
  return NextResponse.json(chef);
}


