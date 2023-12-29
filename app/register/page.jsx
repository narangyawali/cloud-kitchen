import React from 'react'
import Link from 'next/link'
export default function Register() {
  return (
  <>

    <h1 className='w-full mb-4 text-4xl text-center text-primary'>Register</h1>
    <div className='flex flex-col items-center justify-center w-full'>
        <div className='max-w-2xl'>
        {/* <label htmlFor="email">Email</label> */}
        <input type="text" name="email" id="" placeholder='Input email' className='h-10 pl-3 border border-red-300 w-80 rounded-2xl' />
        </div>
        <div>
        {/* <label htmlFor="password">Password</label> */}
        <input type="password" name="password" id="" placeholder='Input password' className='h-10 pl-3 my-5 border border-red-300 w-80 rounded-2xl ' />
        {/* <div className='flex flex-col my-2 text-center text-lg'>
          <div className=''>

          <label htmlFor="role"> Register as chef</label>
        <input type="radio" name="role" value={"chef"} id=""  />
          </div>
          <div>

          <label htmlFor="role"> Register as customer</label>
        <input type="radio" name="role" value={"customer"} id="" />
          </div>
        </div> */}
        </div>
        <h1 className='text-2xl'>Register</h1>
        <div className='flex '>

        <input type="button" value="As Chef" className='h-8 border border-slate-600 cursor-pointer w-40 rounded-2xl text-xl bg-blue-300' />
        <input type="button" value="As Customer" className='h-8 border border-slate-600 cursor-pointer w-40 rounded-2xl text-xl bg-blue-300' />
        </div>
    <p className='my-5'>Or just login</p>
	<Link className='h-8 border border-slate-600 cursor-pointer w-80 rounded-2xl text-xl bg-blue-300 text-center' href={"/login"}> Login</Link>
    </div>

  </>
  )
}
