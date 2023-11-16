import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (

        <div className="bg-black flex justify-center items-center">
            <nav className=" container-myc flex justify-center align-center p-2">

                <div className="flex items-center justify-between " style={{ gap: "60px" }}>
                    <div className='flex ' style={{ gap: "30px" }}>
                        <div>

                            <img className='w-[84px] mr-8' src={require('../assets/navimg.png')} alt="" />
                        </div>

                        <div className='flex justify-between items-center gap-7'>
                
                            <Link to="/"  className="text-[#F9C306] text-[20px] " style={{ letterSpacing: "1px" }}>GAMING</Link>
                            <Link to="https://katanainu.com/assets/resources/katanainutokenomics.pdf" target="_blank"  className="text-white text-[20px] " style={{ letterSpacing: "1px" }}>TOKENOMICS</Link>
                            <Link to="https://katanainu.com/assets/resources/katanainuwhitepaper.pdf" target="_blank"  className="text-white text-[20px] " style={{ letterSpacing: "1px" }}>WHITEPAPPER</Link>
                            <Link to="https://katanainu.com/#roadmap" target="_blank"  className="text-white text-[20px] " style={{ letterSpacing: "1px" }}>ROADMAP</Link>
                            <Link to="https://katanainu.com/team" target="_blank"  className="text-white text-[20px] " style={{ letterSpacing: "1px" }}>TEAM</Link>

                        </div>
                    </div>

                    <div className='flex gap-5'>
                        <Link  to="https://babydogeswap.com/" target='_blank' className=" font-bold  text-lg  flex justify-center items-center w-[200px]   text-white border-cstm1 ">
                            <img src={require('../assets/Bd 1.png')} className='w-[121px] m-1 p-1' alt="" />
                        </Link>

                        <button className=" px-2 bg-[#f9c306] w-[200px] font-bold  text-lg  flex justify-center items-center text-white border-cstm2 ">
                            <p className='text-black text-base'>CONNECT WALLET</p>
                        </button>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
