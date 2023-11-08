import React from 'react'
import './Comp.css'


function HeaderMob() {
  return (


       
    <>
        <div className='mybg'>
            
            <div className="grid grid-cols-1 gap-0 md:grid-cols-1 lg:grid-cols-2 container  flex justify-center items-center lg:flex-row-reverse	 ">
    
               
                <div>
                    <div className='flex justify-center items-center'>
                        <img className='w-full' src={require('../assets/babydoge_Viewport_021 1.png')} alt="" />
                    </div>
                </div>
    
                <div>
                    <div className='flex justify-center items-center flex-col p-4'>
                        <img className='w-7/12' src='https://babydoge.katanainu.com/static/media/Babydoge_x_Katanainu.8b1e2178435316562627.png' alt="" />
                        <img className='w-7/12' src={require('../assets/Group 40746.png')} alt="" />
                        <button class="bg-transparent font-bold w-full sm:w-[208px] md:w-[308px] lg:w-[308px] text-lg text-white border-cstm1 py-2 ">
                            Whitelist Now
                        </button>
                        <div className='flex flex-wrap justify-center btn1-cover items-center mt-2 '>
                            <button class="bg-transparent font-bold w-[128px] lg:w-[208px] md:w-[208px] sm:w-[208px] text-lg h-[47px] m-2 flex justify-center items-center text-white me-1 border-cstm1 p-2">
                                <img src={require('../assets/Bd 1.png')} className='w-[121px] m-2  p-1' alt="" />
                            </button>
                            <button class="bg-transparent font-bold text-lg w-[128px] lg:w-[208px] md:w-[208px] sm:w-[208px]  h-[47px] text-white  m-2 flex justify-center items-center btn2-cover border-cstm1 p-2">
                                <img src={require('../assets/KatanaInu.ec3265304d4ff036d1e8.png')} className='w-[121px] m-1 p-1' alt="" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default HeaderMob
