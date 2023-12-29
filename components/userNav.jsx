"use client"
import { fetcher } from '@/lib'
import Link from 'next/link'
import useSWR from 'swr'


export default function  UserNav() {
   const name ="ddd"
  //  const res =  fetch("/")
	const {data,error, isLoading} = useSWR("http://localhost:8080/",fetcher)
	// const {data,error, isLoading} = useSWR("https://api.github.com/repos/narangyawali/dino_game",fetcher)
  if (error) return <h1>{console.log(error)}Error</h1>
  if (data) return <Log name={data}/>

  return (
 <>
 <NotLog/>
 </>
  )
}

function Log({name}){
return(<>
{console.log(name)}
	<p>Hello {name.msg}</p>
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
