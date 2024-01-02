
import OrderAppr from "./orderAppr";


const approveOrder= async(orderId)=>{

  const data = await fetch(`/api/order/list`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId
    }),
  });
  // const status = await data.status()
  const result = await data.json();
}



export  function OrderList({show}){

  // const {data, error , loading}= useSWR("/api/order/list/",fetcher)

  const ol=[
    {
    id:"oid",
    dishName:"dish name",
    dishImage:"/img/thakali.jpg",
    cName:"customer name",
    number:2

  },
    {
    id:"oid",
    dishName:"dish name",
    dishImage:"/img/thakali.jpg",
    cName:"customer name",
    number:2

  },
    {
    id:"oid",
    dishName:"dish name",
    dishImage:"/img/thakali.jpg",
    cName:"customer name",
    number:2

  },
    {
    id:"oid",
    dishName:"dish name",
    dishImage:"/img/thakali.jpg",
    cName:"customer name",
    number:2

  },
]

  if (true) {
	// console.log(data);
  }

  if (true) {
  return(<>
        <div className="border border-blue-500 h-56 min-w-96 mx-96 absolute top-56 ">
  <h1>Orderlist</h1>

<div className="flex p-1">
  {
    ol.map((order)=>{
      return(<>
      	<div className="border border-blue-400 p-1">

      		<h1>{order.dishName}</h1>
          <h1>{order.cName}</h1>
          <img src={order.dishImage} alt="img"  height={75} width={75}/>
          <h1>{order.number}</h1>
          <OrderAppr/>
        </div>

      </>)
    })
  }
  </div>
  			</div>
  </>)
  }
}

