import React from 'react'
import './Comp.css'

function BelowHeader() {
  return (
  
  <>
  <div className='bg-black'>
  <div className='container m-auto p-0'>
  <div className="   grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4  p-3  flex justify-center items-center text-center">
    <div className='text-white  px-2 	my-box-pd-1 text-lg  md:text-lg	  ' ><span className='mytxt'>CHAIN:</span> OKB CHAIN</div>
    <div className='text-white  px-2 	my-box-pd-2 text-lg  md:text-lg	  border-y-my' ><span className='mytxt'>Supply:</span> 20,000</div>
    <div className='text-white  px-2 	my-box-pd-2 text-lg  md:text-lg	  border-y-my-2' ><span className='mytxt'>lootbox:</span> 2  character & 5 Swords</div>
    <div className='text-white  px-2 	my-box-pd text-lg  md:text-lg	  border-y-my' ><span className='mytxt'>Price:</span> 10$/Mint</div>
  </div>
  </div>
  </div>
  </>
  )
}

export default BelowHeader
