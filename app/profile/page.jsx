"use client";

import { convertBase64, fetcher } from "@/lib";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import useSWR from "swr";

function Page() {
  const [cookies, setCookie, removeCookie] = useCookies();
  console.log(cookies["ischef"]);

  if (cookies["ischef"] == true) {
    return <Chef />;
  } else if (cookies["ischef"] == false) {
    return <Customer />;
  } else {
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }
}

export default Page;

function Chef() {
  // const {data, error , loading} = useSWR("/api/chef/me",fetcher)
  const [update, setUpdate] = useState("");
  useEffect(() => {
    const getChef = async () => {
      const res = await fetch("/api/chef/me");
      const result = await res.json();
      console.log(result);
      setName(result?.name);
      setCusine(result?.cusine);
      setDescription(result?.description);
      setAddresss(result?.address);
    };
    getChef();
  }, [update]);

  const [name, setName] = useState("");
  const [cusine, setCusine] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState([0]);
  const [address, setAddresss] = useState("");
  const [isAvailable, setIsAvailable] = useState("");

  const [uploadShow, setUploadShow] = useState(false);
  const [orderShow, setOrderShow] = useState(false);

  const handleClick = async () => {
    const data = await fetch(`/api/chef/`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        cusine,
        description,
        address,
        location,
      }),
    });
    // const status = await data.status()
    const result = await data.json();
    setUpdate(result);
  };
  // const
  return (
    <>
      <div className="px-64 pb-10">
        <h1 className="text-red-500">Chef</h1>
        <section classname="px-56 pb-10 mx-56 ">
          <h1 className="text-2xl">Your Profile</h1>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border border-black h-8 pl-2 my-2"
          />
          <br />
          <input
            type="text"
            placeholder="Preferd cusine"
            value={cusine}
            onChange={(e) => {
              setCusine(e.target.value);
            }}
            className="border border-black h-8 pl-2 my-2 "
          />
          <br />
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="border border-blue-600 p-2"
            placeholder="Some Description About chef"
          ></textarea>
          <br />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setAddresss(e.target.value);
            }}
            className="border border-black h-8 pl-2 my-2 "
          />
          <br />
          <button className="h-10 border border-blue-500 rounded-xl text-xl p-1">
            Get Location
          </button>
          <br />
          <input
            type="checkbox"
            id="switch"
            value={isAvailable}
            onChange={(e) => {
              setIsAvailable(e.target.value);
            }}
            className="h-5 w-5 mt-3"
          />
          <label htmlFor="switch	" className="ml-5">
            Is Available
          </label>
          <br />
          <div className="flex justify-between">
            <input
              type="button"
              value="Update"
              className="h-10 border cursor-pointer border-blue-500 rounded-xl text-xl p-1"
              onClick={handleClick}
            />
            <button
              onClick={() => {
                setUploadShow(!uploadShow);
              }}
              className="h-10 border border-blue-500 rounded-xl text-xl p-1"
            >
              Add One
            </button>
            <button
              onClick={() => {
                setOrderShow(!orderShow);
              }}
              className="h-10 border border-blue-500 rounded-xl text-xl p-1"
            >
              My Orders
            </button>
          </div>
          <AddItem show={uploadShow} />
					<OrderList show={orderShow}/>
          <h1 className="text-2xl">Your Menu</h1>
          <div className=" flex flex-wrap justify-evenly items-center">
            {/* <MenuItem/>
				<MenuItem/>
				<MenuItem/>
				<MenuItem/>
				<MenuItem/>
      <MenuItem/> */}
          </div>
        </section>
      </div>
    </>
  );
}

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

function OrderList({show}){

  const {data, error , loading}= useSWR("/api/order/list/",fetcher)


  if (data) {
	console.log(data);
  }

  if (show) {
  return(<>
        <div className="border border-blue-500 h-56 w-96 mx-96 absolute top-56 ">
  <h1>Orderlist</h1>
  			</div>
  </>)
  }
}

function AddItem({ show }) {

  const [file, setFile]= useState("")
  const handleChange = async(e)=>{
    const f = e.target.files[0]
    const fileData= await convertBase64(f)
    setFile(fileData)
    console.log(fileData);
  }

	const [name,setName]= useState("")
	const [price,setPrice]= useState("")
	const [description,setDescription]= useState("")

  const upload = async()=>{

		const data = await fetch(`/api/items/`,{
      method:"POST",
      headers:{
        'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body:JSON.stringify({
   		name,
      image:file,
      price,
      description 
      })
    })
    // const status = await data.status()
    const result = await data.json()
    console.log(result);

  }

  if (show) {
    return (
      <>
        <div className="border border-blue-500 h-56 w-96 mx-96 absolute top-56">
          <h1>Add Item</h1>
          <input
          	value={name}
            onChange={(e)=>{setName(e.target.value)}}
            type="text"
            placeholder="name"
            className="border border-b-blue-500"
          />
          <input
          	value={price}
            onChange={(e)=>{setPrice(e.target.value)}}
            type="number"
            placeholder="price"
            className="border border-b-blue-500"
          />
          <input
          	value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
            type="text"
            placeholder="description"
            className="border border-b-blue-500"
          />
          <input  onChange={handleChange} type="file" />
          <br />
          <input type="button" value="upload" onClick={upload} className="cursor-pointer border border-blue-500 h-7 w-28" />
        </div>
      </>
    );
  }
}
function MenuItem() {
  return (
    <>
      <div className="h-64 w-64 my-8 mx-5 border border-blue-500"></div>
    </>
  );
}

function Customer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddresss] = useState("");
  const [location, setLocation] = useState([0]);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    const getCustomer = async () => {
      const res = await fetch("/api/customer/me");
      const result = await res.json();
      console.log(result);
      setEmail(result?.email);
      setName(result?.name);
      setLocation(result?.location);
      setAddresss(result?.address);
    };
    getCustomer();
  }, [update]);

  const handleClick = async () => {
    const data = await fetch(`/api/customer/`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        location,
      }),
    });
    // const status = await data.status()
    const result = await data.json();
    setUpdate(result);
  };

  return (
    <>
      <section className="px-56 pb-10">
        <h1 className="text-2xl">Your Profile</h1>
        <h1 className="text-2xl">Welcome back {email}</h1>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border border-black h-8 pl-2 my-2"
        />
        <br />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => {
            setAddresss(e.target.value);
          }}
          className="border border-black h-8 pl-2 my-2 "
        />
        <br />

        <button className="h-10 border border-blue-500 rounded-xl text-xl p-1">
          Get Location
        </button>
        <br />

        <input
          type="button"
          value="Update"
          onClick={handleClick}
          className="h-10 border cursor-pointer border-blue-500 rounded-xl text-xl p-1"
        />
      </section>
    </>
  );
}

export { MenuItem };
