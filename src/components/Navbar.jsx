import React, { useState } from 'react';

const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (

        <div className="bg-black flex justify-center items-center">
            <nav className=" container-myc p-2">
                <div >
                    <div className="flex items-center justify-between space-x-4">
                        <div className='flex'>
                            <div>

                                <img className='w-[84px] mr-8' src={require('../assets/navimg.png')} alt="" />
                            </div>

                            <div className='flex justify-between items-center gap-7'>
                                <a href="#" className="text-[#F9C306] text-[20px] " style={{letterSpacing: "1px"}}>GAMING</a>
                                <a href="#" className="text-white text-[20px] " style={{letterSpacing: "1px"}}>TOKENOMICS</a>
                                <a href="#" className="text-white text-[20px] " style={{letterSpacing: "1px"}}>WHITEPAPPER</a>
                                <a href="#" className="text-white text-[20px] " style={{letterSpacing: "1px"}}>ROADMAP</a>
                                <a href="#" className="text-white text-[20px] " style={{letterSpacing: "1px"}}>TEAM</a>
                            </div>
                        </div>

<div className='flex gap-5'>            
                <button class=" font-bold  text-lg  flex justify-center items-center  text-white border-cstm1 ">
                            <img src={require('../assets/Bd 1.png')} className='w-[121px] m-1 p-1' alt="" />
                        </button>

                        <button  class=" px-2 bg-[#f9c306] font-bold  text-lg  flex justify-center items-center text-white border-cstm2 ">
                            <p className='text-black text-base'>CONNECT WALLET</p>
                        </button>

                        </div>
                    </div>
                   </div>
            </nav>
        </div>
    );
};

export default Navbar;
