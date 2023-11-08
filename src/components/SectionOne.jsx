import React from 'react'
import './Comp.css'

function SectionOne() {
  return (
    
    
  <div className="bordermy secone-bg flex justify-center items-center pb-0 flex-wrap gap-2">

    <div  className=" flex justify-end flex-col items-center p-2 pb-0 flex-wrap gap-2">
        <img className='w-[241px]' src={require('../assets/katana-05 1.png')} alt="" />
    </div>
 <div className=" flex justify-center flex-col items-center md:items-start lg:items-start p-2 flex-wrap gap-2">
    
  <div className='text-white font-medium text-3xl ' >Get you whitelist spot now!</div>
  <button class="bg-amber-400	 font-bold text-xl  rounded-lg	 text-black px-3 lg:px-5 sm:px-5 md:px-5 py-2 justify-center items-center flex">
  Whitelist Now
     </button>
 </div>
</div>
  )
}

export default SectionOne
