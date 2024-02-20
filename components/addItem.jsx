import { useState } from "react"
import {convertBase64} from "@/lib"

export function AddItem({ show }) {

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
