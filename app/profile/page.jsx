function Page() {
  return (
    <>
  <Chef/>
  </>
  )
}

export default Page

function Chef(){

  return(<>
  		<h1>Chef</h1>
      <section className="px-56 pb-10">

        <h1 className="text-2xl">Your Profile</h1>
        <input type="text" placeholder="Full Name" className="border border-black h-8 pl-2 my-2" />
        <br />
        <input type="text" placeholder="Preferd cusing" className="border border-black h-8 pl-2 my-2 " />
        <br />
        <textarea name="desc" id="" cols="30" rows="10" className="border border-blue-600 p-2" placeholder="Some Description About chef"></textarea>
       <br />
        <input type="text" placeholder="Location" className="border border-black h-8 pl-2 my-2 " />
        <br />
        <button className="h-10 border border-blue-500 rounded-xl text-xl p-1">Get Location</button>
        <br />
      	<input type="checkbox" id="switch" className="h-5 w-5 mt-3" />
        <label htmlFor="switch	" className="ml-5">Is Available</label>	
        <div className="flex justify-between">

        <h1 className="text-2xl">Your Menu</h1>
        <button className="h-10 border border-blue-500 rounded-xl text-xl p-1">Add One</button>
        </div>
        <div className=" flex flex-wrap justify-evenly items-center">
				{/* <MenuItem/>
				<MenuItem/>
				<MenuItem/>
				<MenuItem/>
				<MenuItem/>
				<MenuItem/> */}

        </div>
      </section>
  </>)
}


function MenuItem(){

  return(<>
  	<div className="h-64 w-64 my-8 mx-5 border border-blue-500">

    </div>
  </>)
}

export {MenuItem}