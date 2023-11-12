import React from 'react'
import './Comp.css'

function Footer() {
  return (
    <div>
        <div className=" pt-[80px] pb-[40px]  bg-black flex justify-center items-center">

        <div className="container m-auto">  
     

<div className="grid grid-cols-1 gap-8 px-3  md:grid-cols-1 lg:grid-cols-2  flex-wrap  flex justify-center items-end ">

    <div>
        <img src={require('../assets/footer.png')} alt="" />
        <h3 className='my-4 text-white uppercase font-blome tracking-[.175em] mt-[36px]'>Don’t miss our latest News</h3>

        <h3 className='my-4 text-white text-[16px] font-blome '>KATANA INU is a project from <span className='text-[#F9C306]'>CHAINVISION GAMES</span></h3>

        <p className='text-[#b4b4b5] text-[13px] pt-6'>
        Nothing on this website constitutes financial advice, and it is always recommended to consult a qualified financial advisor before participating in any token or NFT purchases.
        </p>
<br />
        <p className='text-[#b4b4b5] text-[13px] pt-6'>Buy Katana Inu NFTs only from katanainu.com or kainu.io subdomains to be safe. Check the website's address for on our main website www.katanainu.com and go to the "Minting NFTs" section to verify.

</p>

<span className='text-[#F9C306] text-[13px]'>Ask in our telegram or discord channel for confirmation. Avoid other websites!</span>
    </div>

    <div>
<div className=" gap-3    mywrp     flex justify-my  items-end ">


<div className='flex gap-3 items-end'>

        <div>
        <p className='text-[#ffffff] font-blome capitalize '>PRODUCTS</p>
        <ul className='mt-4'>
            <li className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>Pancakeswp</li>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>Uniswap</li>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>Whitepapper</li>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>Roadmap</li>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>Tokenomics</li>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>FAQ</li>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>Chainplay</li>
        </ul>
        </div>
        
        <div>

<div>

        <img src={require('../assets/l1.png')} alt="" />
</div>

    <p  className='text-[#ffffff] font-blome capitalize'>NEED HELP</p>
        <ul  className='mt-4'>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>Contact Us</li>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>Discord</li>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>Medium</li>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>Reddii</li>
            <li  className='text-[#b4b4b5] pb-[8px] pt-[10px] border-b border-[#F9C306] w-[140px] cursor-pointer mb-[16px]'>ChainVision Games</li>
        </ul>  

        </div>
  
        </div>
    <div className='flex justify-center flex-col align-start '>
        <div>
        <img src={require('../assets/l1.png')} alt="" />


        </div>
    <p className='text-[#ffffff] font-blome capitalize'>FOLLLOW US</p>
        <ul >

            <li><div className='flex myf my-4 gap-2'>
            <img src={require('../assets/i4.png')} alt="" />
            <img src={require('../assets/i3.png')} alt="" />
            <img src={require('../assets/i2.png')} alt="" />
            <img src={require('../assets/i1.png')} alt="" />
                </div></li>
            <li  className='text-[#b4b4b5] w-[140px] pb-[8px] pt-[10px] border-b border-[#F9C306] cursor-pointer mb-[16px]'>Terms of Service</li>
            <li  className='text-[#b4b4b5] w-[140px] pb-[8px] pt-[10px] border-b border-[#F9C306] cursor-pointer mb-[16px]'>Cookies Polices</li>
        </ul>
    </div>

    </div>

    </div>
    </div>
    </div>
   

</div>
</div>
   
  )
}

export default Footer
