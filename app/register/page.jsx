"use client"

import Link from 'next/link'
import { useState } from 'react'
import {useRouter} from "next/navigation"

export default function Register() {


  const [ email, setEmail ]= useState("")
  const [ password, setPassword ]= useState("")



  const handleClick= async (e)=>{

    // console.log(email,password);
    if (e.target.name == "chef") {
       await register("chef")
		router.push("/profile")
      // console.log(chef);

      
    }else{
      await register("customer")
		router.push("/profile")
      // console.log(customer);
    }
  }

  const register= async(role)=>{


		const data = await fetch(`/api/${role}/register`,{
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

    <h1 className='w-full mb-8 text-4xl text-center text-primary'>Register</h1>
    <div className='flex flex-col items-center justify-center w-full'>
        <div className='max-w-2xl p-4'>
        {/* <label htmlFor="email">Email</label> */}
        <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="" placeholder='Input email' className='h-10 pl-3 border border-red-300 w-80 rounded-2xl' />
        </div>
        <div>
        {/* <label htmlFor="password">Password</label> */}
        <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Input password' className='h-10 pl-3 my-5 border border-red-300 w-80 rounded-2xl ' />
      
        </div>
        <h1 className='text-2xl mb-4'>Register</h1>
        <div className='flex '>

        <input type="button" value="As Chef" name='chef' onClick={handleClick} className='h-8 border border-slate-600 cursor-pointer w-40 rounded-2xl text-xl bg-blue-300' />
        <input type="button" value="As Customer"name='customer' onClick={handleClick} className='h-8 border border-slate-600 cursor-pointer w-40 rounded-2xl text-xl bg-blue-300' />
        </div>
				{

					//    <p className='my-5'>Or just login</p>
					// <Link className='h-8 border border-slate-600 cursor-pointer w-80 rounded-2xl text-xl bg-blue-300 text-center' href={"/login"}> Login</Link>
				}
    </div>

  </>
  )
}
