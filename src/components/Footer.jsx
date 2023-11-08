import React from 'react'
import './Comp.css'

function Footer() {
  return (
    <div>
        <div className="bordermy p-4  bg-black">

<div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 container p-8 flex justify-center items-center ">

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
<div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 container mx-auto lg:py-[68px] md:py-8 py-2  flex justify-center items-center ">




        <div>
        <p className='text-[#ffffff] font-blome capitalize mt-[25px]'>PRODUCTS</p>
        <ul className='mt-4'>
            <li className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Pancakeswp</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Uniswap</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Whitepapper</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Roadmap</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Tokenomics</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>FAQ</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Chainplay</li>
        </ul>
        </div>
        
        <div>

<div>

        <img src={require('../assets/l1.png')} alt="" />
</div>

    <p  className='text-[#ffffff] font-blome capitalize'>NEED HELP</p>
        <ul  className='mt-4'>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Contact Us</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Discord</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Medium</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Reddii</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>ChainVision Games</li>
        </ul>  

        </div>
  

    <div className='flex justify-center flex-col align-center mt-[55px]'>
        <div>
        <img src={require('../assets/l1.png')} alt="" />


        </div>
    <p className='text-[#ffffff] font-blome capitalize'>FOLLLOW US</p>
        <ul className='mt-3 '>

            <li><div className='d-flex myf  mb-2 gap-2'>
            <img src={require('../assets/i4.png')} alt="" />
            <img src={require('../assets/i3.png')} alt="" />
            <img src={require('../assets/i2.png')} alt="" />
            <img src={require('../assets/i1.png')} alt="" />
                </div></li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Terms of Service</li>
            <li  className='text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]'>Cookies Polices</li>
        </ul>
    </div>

    </div>

    </div>
   

</div>
</div>
    </div>
  )
}

export default Footer
