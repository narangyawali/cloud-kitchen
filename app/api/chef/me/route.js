
import { Chef } from "@/db/models";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request,context){

    const id =JSON.parse(cookies().get("_cre").value)._id
    // const body = await request.json()
    // const {params} = context
    const item = await Chef.findById(id)
    // console.log(body);

    return NextResponse.json(item)


}