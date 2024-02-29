import { NextResponse } from "next/server";
import { Chef } from "@/db/models";
import db from "@/db/db";
import { cookies } from "next/headers";
db();
export async function POST(request) {
  const body = await request.json();
  const chef = new Chef({
    email: body.email,
    password: body.password,
  });

 const newChef= await chef.save();
 if(!newChef){
		return NextResponse.json({error:"could not create customer"},{status:404})
	}

  cookies().set("ischef", "true",{expires: Date.now() + 60*60*24*30*1000});
  cookies().set("_cre", JSON.stringify(chef),{expires: Date.now() + 60*60*24*30*1000});
  cookies().set("fname", "chf",{expires: Date.now() + 60*60*24*30*1000});
  console.log(body);
  return NextResponse.json(chef);
}
