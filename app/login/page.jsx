"use client"
import useSWR from 'swr'
import Link from 'next/link'
import { fetcher } from '@/lib'
import { useState } from 'react'
export default function Login() {
  
  const [ email, setEmail ]= useState("")
  const [ password, setPassword ]= useState("")



  const handleClick= async (e)=>{

    // console.log(email,password);
    if (e.target.name == "chef") {
       await login("chef")
      // console.log(chef);

      
    }else{
      const customer= await login("customer")
      // console.log(customer);
    }
  }

  const login= async(role)=>{
    // const { data, error, isLoading} = useSWR("/api/chef/login",fetcher)



		const data = await fetch(`/api/${role}/login`,{
      method:"POST",
      headers:{
        'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email,
        password
    
      })
    })
    // const status = await data.status()
    const result = await data.json()

    console.log(result);


  }
	

  return (
    <>
    <h1 className='w-full mb-4 text-4xl text-center text-primary'>Login</h1>
    <div className='flex flex-col items-center justify-center w-full'>
        <div className='max-w-2xl'>
        {/* <label htmlFor="email">Email</label> */}
        <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Input email' className='h-10 pl-3 border border-red-300 w-80 rounded-2xl' />
        </div>
        <div>
        {/* <label htmlFor="password">Password</label> */}
        <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Input password' className='h-10 pl-3 my-5 border border-red-300 w-80 rounded-2xl ' />
        </div>
        <h1 className='text-2xl'>Login</h1>
        <div className='flex'>
        <input type="button" value="As Chef" name="chef" onClick={handleClick} className='h-8 border border-slate-600 cursor-pointer w-40 rounded-2xl text-xl bg-blue-300' />
        <input type="button" value="As Customer" name="customer" onClick={handleClick} className='h-8 border border-slate-600 cursor-pointer w-40 rounded-2xl text-xl bg-blue-300' />
        </div>
    <p className='my-5'>Or just Register</p>
	<Link className='h-8 border border-slate-600 cursor-pointer w-80 rounded-2xl text-xl bg-blue-300 text-center' href={"/register"}> Register</Link>
    </div>
    </>
  )
}
