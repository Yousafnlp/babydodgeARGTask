import React, { useState } from 'react';
import { IoOptionsSharp } from "react-icons/io5";


const Navmob = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="bg-black ps-3 pe-3 p-2">
      <div className="container-myc mx-auto flex justify-between items-center">
     
      <div>

<img className='w-[47px]' src={require('../assets/navimg.png')} alt="" />
</div>

   
   
<div>            
                <button class="bg-transparent font-bold  text-lg  flex justify-center items-center text-white border-cstm1 ">
                            <img src={require('../assets/Bd 1.png')} className='w-[121px] m-1 p-1' alt="" />
                        </button>
                        </div>
        <div className=" text-[25px]">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none"
          >
      
      <IoOptionsSharp />

      
          </button>
        </div>
        {isDrawerOpen && (
          <div className=" fixed top-[59px] right-0 w-2/4  bg-black ">
            <div className="p-4">
                <a href="#" className="text-white block my-2 text-sm " style={{letterSpacing: "1px"}}>GAMING</a>
                                <a href="#" className="text-white block my-2 text-sm " style={{letterSpacing: "1px"}}>TOKENOMICS</a>
                                <a href="#" className="text-white block my-2 text-sm " style={{letterSpacing: "1px"}}>WHITEPAPPER</a>
                                <a href="#" className="text-white block my-2 text-sm " style={{letterSpacing: "1px"}}>ROADMAP</a>
                                <a href="#" className="text-white block my-2 text-sm " style={{letterSpacing: "1px"}}>TEAM</a>
                           </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navmob;
