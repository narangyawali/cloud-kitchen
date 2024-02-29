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
  if(!chef){
		return NextResponse.json({error:"chef not found"},{status:404})
	}
  const name = chef?.name || "fnamelogin";
  cookies().set("fname", name,{expires: Date.now() + 60*60*24*30*1000});
  cookies().set("ischef", "true",{expires: Date.now() + 60*60*24*30*1000});
  cookies().set("_cre", JSON.stringify(chef),{expires: Date.now() + 60*60*24*30*1000});
  console.log(JSON.stringify(chef));
  return NextResponse.json(chef);
}


