import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'
import { IoOptionsSharp } from "react-icons/io5";
//import styles 
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom'

const Drawermy = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>

<nav className="bg-black ps-3 pe-3 p-2 relative">
      <div className="container-myc mx-auto flex justify-between items-center">

        <div>

          <img className='w-[55px]' src={require('../assets/navimg.png')} alt="" />
        </div>



        <div>
          <Link to="https://babydogeswap.com/" target="_blank" class="bg-transparent font-bold  text-lg   flex justify-center items-center text-white border-cstm1 ">
            <img src={require('../assets/Bd 1.png')} className='w-[121px] m-1 p-1' alt="" />
          </Link>
        </div>


        <div className=" text-[45px]">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none flex justify-center items-center"
          >

            <IoOptionsSharp />


          </button>
          

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla  '
                style={{ position: "absolute !important", top: "64.200px !important"}}
            >    
            
             <div className=" w-full h-full bg-black ">
            <div className="p-4">
              <Link to="/"  className="text-[#F9C306] block my-2 text-sm " style={{ letterSpacing: "1px" }}>GAMING</Link>
              <Link to="https://katanainu.com/assets/resources/katanainutokenomics.pdf"  target="_blank" className="text-white block my-2 text-sm " style={{ letterSpacing: "1px" }}>TOKENOMICS</Link>
              <Link to="https://katanainu.com/assets/resources/katanainuwhitepaper.pdf"  target="_blank" className="text-white block my-2 text-sm " style={{ letterSpacing: "1px" }}>WHITEPAPPER</Link>
              <Link to="https://katanainu.com/#roadmap"  target="_blank" className="text-white block my-2 text-sm " style={{ letterSpacing: "1px" }}>ROADMAP</Link>
              <Link to="https://katanainu.com/team"  target="_blank" className="text-white block my-2 text-sm " style={{ letterSpacing: "1px" }}>TEAM</Link>
            </div>
          </div>
            </Drawer>
            </div>
            </div>
    </nav>
        </>
    )
}

export default Drawermy