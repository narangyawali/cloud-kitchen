import Image from 'next/image'

export default function Home() {
  return (
  <>
  	<nav className='flex justify-between p-5 mx-96'> 
			<div>
        <div className='flex justify-items-start'>
          <p className='pr-2'>logo</p>
          <p className='pr-2'>Home</p>
          <p className='pr-2'>Menu</p>
          <p className='pr-2'>Contact</p>
        </div>
      </div>
			<div>login and cart</div>
    </nav>
  </>
  )
}
