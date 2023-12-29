import { NextResponse } from "next/server";
import { Chef } from "@/db/models";
import db from "@/db/db";
import { cookies } from "next/headers";
db();



export async function PATCH(request) {
  
    const body = await request.json()
    
    const cre= JSON.parse(cookies().get("_cre").value)
    console.log(JSON.parse(cookies().get("_cre").value).email);
    const chef = await Chef.findOneAndUpdate(
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
  cookies().set("_cre", JSON.stringify(chef));
  cookies().set("ischef", "true");
 return NextResponse.json(chef)
}
