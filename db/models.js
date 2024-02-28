import mongoose from  "mongoose"

const Schema = mongoose.Schema;

const locationSchema = new Schema({
	x:{
		type:Number,
	},
	y:{
		type:Number,
	}
})
const customerSchema = new Schema({
    name : {
        type: String,
    },

    email :  {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },
	img:{
		type:String,
	},
	address:{
        type:String,
    },
    location:{
        type:locationSchema,
    },
	description:String,
})

const chefSchema = new Schema({
	name:{
		type:String,
	},
	email:{
		type:String,
	},
	cusine:String,
	password:{
		type:String
	},	
	img:String,
	description:String,

	address:{
        type:String,
    },
    location:{
        type:locationSchema,
    },
}) 

const itemSchema= new Schema({

	name:String,
	image:String,
	price:Number,
	description:String,
	chef:{
		type:mongoose.Types.ObjectId,
		ref:"Chef",
		required:true,
	}
})

const orderSchema= new Schema({
	
	item:{
		type:mongoose.Types.ObjectId,
		ref:"Item",
	},
	chef:{
		type:mongoose.Types.ObjectId,
		ref:"Chef",
	},
	customer:{
		type:mongoose.Types.ObjectId,
		ref:"Customer",
	},
	number:Number,
	orderTime:{

		type:Date,
		default:Date.now()
	},
	approvedByChef:{
		type:Boolean,
		default:false
	}


})

const Customer = mongoose.models.Customer  ?? mongoose.model("Customer", customerSchema);
const Chef = mongoose.models.Chef ?? mongoose.model("Chef",chefSchema); 
const Item = mongoose.models.Item ?? mongoose.model("Item",itemSchema); 
const Order = mongoose.models.Order ?? mongoose.model("Order",orderSchema); 


export {Customer, Chef,Item, Order}



