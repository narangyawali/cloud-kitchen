

import { NextResponse } from "next/server";
import { Item } from "@/db/models";
import db from "@/db/db";
import { cookies } from "next/headers";
db();

export async function POST(request){

    const body = await request.json()
    const cre= JSON.parse(cookies().get("_cre").value)

	const item = new Item({
        name:body.name,
        image:body.image,
        price:body.price,
        description:body.description,
        chef:cre._id

    })
    await item.save()

    return NextResponse.json(item)

}

export async function GET(request){
    const items = await Item.find()
    return NextResponse.json(items)
    // return NextResponse.json({"items":items})
}