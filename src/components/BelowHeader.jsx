import React from 'react'
import './Comp.css'

function BelowHeader() {
  return (
  
  <>
  <div className="bordermy bg-black flex justify-center items-center p-2 flex-wrap gap-2">
    <div className='text-white font-medium	fs-[25px] px-4 border-y-my' ><span className='mytxt'>CHAIN:</span> OKB CHAIN</div>
    <div className='text-white font-medium	fs-[25px] px-4 border-y-my' ><span className='mytxt'>Supply:</span> 20,000</div>
    <div className='text-white font-medium	fs-[25px] px-4 border-y-my' ><span className='mytxt'>lootbox:</span> 4  character & 5 Swords</div>
    <div className='text-white font-medium	fs-[25px] px-4 border-y-my' ><span className='mytxt'>Price:</span> 10$/Mint</div>
  </div>
  </>
  )
}

export default BelowHeader
