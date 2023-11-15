import React from 'react'
import './Comp.css'

function SectionThree() {
    return (
        <div>


<div className="bg-black ">


            <div className="container-myc m-auto p-0">

            <div className="bordermy  pt-5 sec-3-bg">

                <div className="grid grid-cols-1 gap-0 md:grid-cols-1 lg:grid-cols-2  px-3 flex justify-center items-center ">

                <div className='flex justify-end items-start '>

                        <div className='flex justify-center flex-col items-start '>
                            <h4 className='lg:text-2xl  md:text-2xl text-lg	font-bold	 text-white my-2'>Mint an NFT</h4>
                            <p className='text-base lg:text-lg md:text-lg font-normal  text-white myy-1	'>and get a random skin or sword.</p>
                            <p className='text-base lg:text-lg md:text-lg font-normal  text-white myy-1	'>Mint more to get better chance at winning.</p>

                            <h4  className='lg:text-2xl  md:text-2xl text-lg font-bold text-white my-2'>Utility</h4>
                            <p className='text-base lg:text-lg md:text-lg font-normal  text-white myy-1	'>- Early Access to the Closed Beta of Katana Inu game.</p>
                            <p className='text-base lg:text-lg md:text-lg font-normal  text-white myy-1	'>- Ranking points for higher earnings in Open Beta and access to our P2E mechanism.</p>

                            <button className='lg:px-[80px] md:px-[80px] px-[40px] py-[7px] lg:py-[13px] md-[13px]  my-3   regbtn'>
                                WHITELIST NOW
                            </button>

                            <div className='flex justify-start items-center '>
                                <p className='text-[8px] w-[50px] text-white mr-3'>Supported&nbsp;by</p>
                                <img className='w-4/5' src={require('../assets/Bd 1.png')} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className='pt-3 '>
                        <img src={require('../assets/mint-character.6486b57df74f6f1e34ad.png')} alt="" />
                    </div>


                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree
