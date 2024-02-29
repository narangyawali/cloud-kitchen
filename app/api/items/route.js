

import { NextResponse } from "next/server";
import { Item,Chef } from "@/db/models";
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
    // const items = await Item.find()
    // return NextResponse.json(items)
	// in case of rollback code
	//
	
    const items = await Item.find()
	const final_item = await Promise.all(items.map( async (singleItem)   => {

		const itemPromise =  Item.findById(singleItem._id);
		const [item]= await Promise.all([itemPromise]);
		const chefPromise = Chef.findById(item.chef)
		const [ chef ] = await Promise.all([chefPromise])
		// console.log(chef)
		const oneItem = {
			"chefName":chef.name,
			"chefLocation":chef.location,
			...singleItem._doc,
		}
		return(oneItem)

	}))
    return NextResponse.json(final_item)
}
