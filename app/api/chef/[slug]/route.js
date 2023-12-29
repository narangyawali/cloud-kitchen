

import { Chef } from "@/db/models";
import { NextResponse } from "next/server";

export async function GET(request,context){

    // const body = await request.json()
    // const {params} = context
    const item = await Chef.findById(context.params.slug)
    // console.log(body);

    return NextResponse.json(item)


}