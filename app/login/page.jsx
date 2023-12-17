import React from 'react'

import Link from 'next/link'
export default function Login() {
  return (
    <>
    <h1 className='w-full mb-4 text-4xl text-center text-primary'>Login</h1>
    <div className='flex flex-col items-center justify-center w-full'>
        <div className='max-w-2xl'>
        {/* <label htmlFor="email">Email</label> */}
        <input type="text" name="email" id="" placeholder='Input email' className='h-10 pl-3 border border-red-300 w-80 rounded-2xl' />
        </div>
        <div>
        {/* <label htmlFor="password">Password</label> */}
        <input type="password" name="password" id="" placeholder='Input password' className='h-10 pl-3 my-5 border border-red-300 w-80 rounded-2xl ' />
        </div>
        <input type="button" value="Login" className='h-8 border border-slate-600 cursor-pointer w-80 rounded-2xl text-xl bg-blue-300' />
    <p className='my-5'>Or just Register</p>
	<Link className='h-8 border border-slate-600 cursor-pointer w-80 rounded-2xl text-xl bg-blue-300 text-center' href={"/register"}> Register</Link>
    </div>
    </>
  )
}
