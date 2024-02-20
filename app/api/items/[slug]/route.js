import { Item,Chef } from "@/db/models";
import { NextResponse } from "next/server";

export async function GET(request,context){

    // const body = await request.json()
    // const {params} = context
	// await Promise.all(
	// const chef = await Chef.findById(item.chef)
	// const 	data = {...item,...chef}
	// 	return NextResponse.json(data)
	// )
    // console.log(body);
	// await Promise.all(
	//
 //    const item = await Item.findById(context.params.slug);
	// console.log(item)
    const itemPromise =  Item.findById(context.params.slug);
	const [item]= await Promise.all([itemPromise]);
	const chefPromise = Chef.findById(item.chef)
	const [ chef ] = await Promise.all([chefPromise])
	const oneItem = {
		"chefName":chef.name,
		...item._doc,
	}
	console.log(oneItem)
    return NextResponse.json(oneItem)


}
