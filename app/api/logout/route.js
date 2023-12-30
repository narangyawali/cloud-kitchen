import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET(request){

	const cs = cookies()
    cs.getAll().map((c)=>{
        cookies().set(c.name,"")
    })

    return NextResponse.json({"logout":"true and succ"})

}