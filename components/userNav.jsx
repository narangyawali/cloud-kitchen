"use client"
import { fetcher } from '@/lib'
import Link from 'next/link'
import useSWR from 'swr'
import Image from "next/image"
import { useCookies } from 'react-cookie'

export default function  UserNav() {
  //  const res =  fetch("/")
	// const {data,error, isLoading} = useSWR("http://localhost:8080/",fetcher)
	// const {data,error, isLoading} = useSWR("https://api.github.com/repos/narangyawali/dino_game",fetcher)
  // if (error) return <h1>{console.log(error)}Error</h1>
  // if (data) return <Log name={data}/>


  const [cookies, setCookie, removeCookie] = useCookies();
  // console.log(cookies["_cre"].email);
  
  if (cookies["_cre"] == "" ) {
    return <NotLog/>
  }
  else{
    return <Log name ="User"/>
  }
  // (cookies["_cre"].email == "") ?  <NotLog/>: <Log name="dd"/>

//   return (
//  <>
//  <NotLog/>
//  </>
  // )



}

function Log({name}){
return(<>
<Link href="/profile">
	<Image src="/user-circle.svg" width="25" height="25" alt="Profile"/>
			{
				// <p>Profile</p>
			}
</Link>
</>)
}


function NotLog() {
  return (
<>
        <p className="pr-2">
          <Link href="/login">Login</Link>
        </p>
        <p className="pr-2">
          <Link href="/register">Register</Link>
        </p>
       
</>
  )
}
