
import { NextResponse } from "next/server";
import { Customer } from "@/db/models";
import db from "@/db/db";
import { cookies } from "next/headers";
db();



export async function PATCH(request) {
  
    const body = await request.json()
    
    const cre= JSON.parse(cookies().get("_cre").value)
    // console.log(JSON.parse(cookies().get("_cre").value).email);
    const customer = await Customer.findOneAndUpdate(
    {
      email: cre.email,
      password: cre.password
    },
    {
      email: cre.email,
      password: cre.password,
      name: body.name,
      location: body.location,
      address: body.address,
    }
  );
  if(!customer){
		return NextResponse.json({error:"error while saving "},{status:404})
	}
  cookies().set("_cre", JSON.stringify(customer));
  cookies().set("ischef", "false");
 return NextResponse.json(customer)
}
