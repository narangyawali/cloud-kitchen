import React from 'react'

export default function Login() {
  return (
    <>
    <h1 className='w-full text-center'>Login</h1>
    <div className='flex flex-col w-full justify-center items-center'>
        <div>
        {/* <label htmlFor="email">Email</label> */}
        <input type="text" name="email" id="" placeholder='Input email' className='border border-red-300' />
        </div>
        <div>
        {/* <label htmlFor="password">Password</label> */}
        <input type="password" name="password" id="" placeholder='Input password' className='border border-red-300' />
        </div>
        <input type="button" value="Login" className='cursor-pointer' />
    </div>
    </>
  )
}
