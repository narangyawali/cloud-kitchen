"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleClick = async (e) => {
    // console.log(email,password);
    if (password < 6) {
			alert("please enter valid email and password")
    } else {
      if (e.target.name == "chef") {
        const chef = await login("chef");
        router.push("/profile");

        // console.log(chef);
      } else {
        const customer = await login("customer");
        router.push("/profile");

        // console.log(customer);
      }
    }

    const login = async (role) => {};
    // const { data, error, isLoading} = useSWR("/api/chef/login",fetcher)

    const data = await fetch(`/api/${role}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    // const status = await data.status()
    const result = await data.json();

    console.log(result);
  };

  return (
    <>
      {/* <h1 className='w-full mb-8 text-4xl text-center text-primary'>Login</h1> */}
      <h2 class="pt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <label htmlFor="email">Email</label> */}
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder=""
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder=""
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex">
          <input
            type="button"
            value="As Chef"
            name="chef"
            onClick={handleClick}
            className="m-3 flex w-full justify-center rounded-md bg-orange-500 px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          />

          <input
            type="button"
            value="As Customer"
            name="customer"
            onClick={handleClick}
            className="m-3 flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          />
        </div>
        {
          //    <p className='my-5'>Or just Register</p>
          // <Link className='h-8 border border-slate-600 cursor-pointer w-80 rounded-2xl text-xl bg-blue-300 text-center' href={"/register"}> Register</Link>
        }
      </div>
    </>
  );
}
