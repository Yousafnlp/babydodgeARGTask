import React from 'react'
import './Comp.css'

function HeaderLaptop() {
  return (
    
    <>
    <div className='bg-black  '>      
    <div className="container m-auto p-0">  
        <div className='mybg'>
            <div className="grid   bordermy grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2    flex justify-center items-center pt-4 pl-1 pr-1 ">
    
                <div>
                    <div className='flex justify-center flex-col p-4'>
                        <img className='w-5/12' src='https://babydoge.katanainu.com/static/media/Babydoge_x_Katanainu.8b1e2178435316562627.png' alt="" />
                        <img className='w-5/12' src={require('../assets/Group 40746.png')} alt="" />
                        <button class="bg-transparent font-bold w-[208px] text-lg text-white border-cstm1 py-2 ">
                            Whitelist Now
                        </button>
                        <div className='flex items-center btn1-cover  items-center mt-3'>
                            <button class="bg-transparent font-bold w-[208px] text-lg h-[47px] flex justify-center items-center text-white mr-1 border-cstm1 py-2">
                                <img src={require('../assets/Bd 1.png')} className='w-[121px] m-1 p-1' alt="" />
                            </button>
                            <button class="bg-transparent font-bold text-lg w-[208px] h-[47px] text-white ml-2 flex justify-center items-center btn2-cover border-cstm1 py-2">
                                <img src={require('../assets/KatanaInu.ec3265304d4ff036d1e8.png')} className='w-[121px] m-1 p-1' alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <img className='w-full' src={require('../assets/babydoge_Viewport_021 1.png')} alt="" />
                    </div>
                </div>
    
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default HeaderLaptop
