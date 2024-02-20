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
	// const chef = await Chef.findById(item.chef)
	// const itemN = {...item,chef.chef}
	//
	// );

	// old one to rollback
    const item = await Item.findById(context.params.slug);
    return NextResponse.json(item)


}
