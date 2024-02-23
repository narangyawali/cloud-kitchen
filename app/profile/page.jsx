"use client";

import { OrderList } from "@/components/orderList";
import { AddItem } from "@/components/addItem";
import { convertBase64, fetcher } from "@/lib";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import useSWR from "swr";
import OrderReport from "@/components/orderReport";
import { GenerateMenu } from "@/components/generateChefMenu";

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
	  setMail(result?.email)
	  setChefId(result?._id)
    };
    getChef();
  }, [update]);

  const [name, setName] = useState("");
  const [chefId,setChefId]= useState("")
  const [cusine, setCusine] = useState("");
  const [description, setDescription] = useState("");
  const [mail,setMail]= useState()
  const [location, setLocation] = useState([0]);
  const [address, setAddresss] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);

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
	const handleLocation = async (e)=>{
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position)=>{
				const locArr=[position.coords.latitude,position.coords.longitude]
				console.log(locArr)
			});
		} else { 
			console.log("errror while fetching location")
		}

	}
  // const
  return (
    <>
      <div className="px-64 pb-10">
        <h1 className="text-red-500 text-2xl text-center">Welcome Back Chef : {mail}</h1>
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
          <button
			onClick={(e)=>{
							handleLocation()
						}}
			className="h-10 border border-blue-500 rounded-xl text-xl p-1">
            Get Location
          </button>
          <br />
          <input
            type="checkbox"
            id="switch"
			checked={isAvailable}
            // value={isAvailable}
            onChange={(e) => {
              setIsAvailable(!isAvailable);
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
			<GenerateMenu chefId={chefId} />

          </div>
        </section>
      </div>
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

	const handleLocation = async (e)=>{
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position)=>{
				const locArr=[position.coords.latitude,position.coords.longitude]
			});
		} else { 
			console.log("errror while fetching location")
		}

	}
  return (
    <>
      <section className="px-56 pb-10">
        <h1 className="text-2xl">Your Profile</h1>
        <h1 className="text-2xl">Welcome back :{email}</h1>
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

        <button
			onClick={handleLocation}
			className="h-10 border border-blue-500 rounded-xl text-xl p-1">
          Get Location
        </button>
        <br />

        <input
          type="button"
          value="Update"
          onClick={handleClick}
          className="h-10 border cursor-pointer border-blue-500 rounded-xl text-xl p-1"
        />

      <br />
      <h1 className="text-center text-2xl">Your Approved Order List</h1> 
      <OrderReport/>
      </section>
    </>
  );
}




function MenuItem() {
  return (
    <>
      <div className="h-64 w-64 my-8 mx-5 border border-blue-500"></div>
    </>
  );
}


export { MenuItem };
