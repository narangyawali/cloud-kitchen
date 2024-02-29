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
      cusine:body.cusine,
      description:body.description,
      location: body.location,
      address: body.address,
    }
  );
  if(!chef){
		return NextResponse.json({error:"error while saving "},{status:404})
	}
  cookies().set("_cre", JSON.stringify(chef));
  cookies().set("ischef", "true");
 return NextResponse.json(chef)
}

export async function GET(request){

  const chefs = await Chef.find()
  return NextResponse.json(chefs)
}
