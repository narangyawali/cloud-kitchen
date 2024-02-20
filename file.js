const item={id:444,
	name:"aaya"

}

const fire={
	id:444,
	age:4
}

const res = {
	"age":fire.age ,
	...item,
}

console.log(res)
