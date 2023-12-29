
import { NextResponse } from "next/server";
import { Chef,Item } from "@/db/models";
import db from "@/db/db";
db();

export async function GET(request,context){

    const items = await Item.find({chef:context.params.slug})
    return NextResponse.json(items)

}