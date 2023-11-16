import React, { useState } from 'react';

import './Comp.css'
import { AiOutlineMail, AiFillCloseCircle } from 'react-icons/ai';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { toast } from 'react-toastify';

function SectionThree() {


    
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };


    
    const [formData, setFormData] = useState({
        email: "",
        twitter: "",
        discord: "",
        walletAddress: "",
    })


    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }



    const onSubmit = async (e) => {
        try {

            closePopup();
            e.preventDefault();
     
            
            let twitterValue
            if(!twitter){
                 twitterValue =  discord;

            }else{
                twitterValue= twitter
            }

            let result = await fetch('https://launcherapi.katanainu.com/api/v1/whitelist/create', {
                method: "post",
                body: JSON.stringify({ email, twitterValue, walletAddress }),
                headers: {  
                    
                    
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    
                }
            })


            setFormData({
                email: "",
                twitter: "",
                discord: "",
                walletAddress: "",

            })


            // console.log("final result__________", result)
        }

        catch (error) {
            toast.error("error while submiting try again")
        }
    }

    const { email, twitter, walletAddress, discord } = formData;



    return (
        <div>


<div className="bg-black ">


            <div className="container-myc m-auto p-0">

            <div className="bordermy  relative pt-5 sec-3-bg">

                <div className="grid grid-cols-1 gap-0 md:grid-cols-1 lg:grid-cols-2  px-3 flex justify-center items-center ">

                <div className='flex justify-start md:justify-start lg:justify-end items-start ps-3'>

                        <div className='flex justify-center flex-col items-start '>
                            <h4 className='lg:text-2xl  md:text-2xl text-lg	font-bold	 text-white my-2'>Mint an NFT</h4>
                            <p className='text-base lg:text-lg md:text-lg font-normal  text-white myy-1	'>and get a random skin or sword.</p>
                            <p className='text-base lg:text-lg md:text-lg font-normal  text-white myy-1	'>Mint more to get better chance at winning.</p>

                            <h4  className='lg:text-2xl  md:text-2xl text-lg font-bold text-white my-2'>Utility</h4>
                            <p className='text-base lg:text-lg md:text-lg font-normal  text-white myy-1	'>- Early Access to the Closed Beta of Katana Inu game.</p>
                            <p className='text-base lg:text-lg md:text-lg font-normal  text-white myy-1	'>- Ranking points for higher earnings in Open Beta and access to our P2E mechanism.</p>

                            <button
                             onClick={openPopup}
                            className='lg:px-[80px] md:px-[80px] px-[40px] py-[7px] lg:py-[13px] md-[13px]  my-3   regbtn'>
                                WHITELIST NOW
                            </button>

                            <div>
                                        {/* <button  className="bg-blue-500 text-white p-2">Open Form</button> */}

                                        {isPopupOpen && (
                                            <div className="container-myc">
                                            <div className="  items-center 	popup-width   absolute z-10 top-[35%] left-2/4 " style={{ transform: "translate(-50%, -50%)" }}>
<form>
                                                <div className="bg-black p-8   rounded-lg" >
                                                    <div className='text-rose-600 left-[95%] top-[4%]	absolute'
                                                    onClick={closePopup}
                                                    style={{cursor: "pointer"}}
                                                    >
                                                        <AiFillCloseCircle />
                                                    </div>
                                                    <h3 className='text-center text-white mb-3'>GET WHITELISTED NOW!</h3>
                                                    <p className='text-center mb-8 text-[hsla(0,0%,100%,.5)]'>you need to provide email address and your social media to be whitelisted.</p>
                                                    <form>

                                                        <div className="flex relative items-center">
                                                            <div className='text-white absolute  top-[10px] left-[10px]'>
                                                                <AiOutlineMail />
                                                            </div>

                                                            <input
                                                                type="text"
                                                                onChange={onChange}
                                                                className='bg-black mb-4 px-8 w-full  py-1 rounded-lg text-white border-2  border-[#F9C306]'
                                                                id="username"
                                                                name="email"
                                                                value={email}
                                                                placeholder="Enter your Email"
                                                            />
                                                        </div>      {/* Add other form fields as needed */}

                                                 


                                                        <label className='text-start  text-[hsla(0,0%,100%,.5)]'>Add Any one of your social Media</label>
                                                            <div className="flex relative mt-3 items-center">
                                                                <div className='text-white absolute  top-[10px] left-[10px]'>
                                                                    <FaTwitter />
                                                                </div>

                                                                <input
                                                                    type="text"
                                                                    onChange={onChange}
                                                                    className='bg-black px-8 w-full  py-1 rounded-lg text-white border-2  border-[#F9C306]'
                                                                    id="username"
                                                                    name="twitter"
                                                                    value={twitter}
                                                                    placeholder="Enter your Twiiter"
                                                                />
                                                            </div>


                                                            <div className="flex relative mt-5 items-center">
                                                                <div className='text-white absolute  top-[10px] left-[10px]'>
                                                                    <FaDiscord />
                                                                </div>

                                                                <input
                                                                    type="text"
                                                                    onChange={onChange}
                                                                    className='bg-black px-8 w-full  py-1 rounded-lg text-white border-2  border-[#F9C306]'
                                                                    id="username"
                                                                    name="discord"
                                                                    value={discord}
                                                                    placeholder="Enter your Discord"
                                                                />
                                                            </div>
                                                    

                                                        <div className='mt-5 '>
                                                            <label className='text-start  text-[hsla(0,0%,100%,.5)]'>Wallet Address</label>

                                                            <input
                                                                type="text"
                                                                onChange={onChange}
                                                                className='bg-black px-2 w-full mt-2  py-1 rounded-lg text-white border-2  border-[#F9C306]'
                                                                id="username"
                                                                name="walletAddress"
                                                                value={walletAddress}
                                                                placeholder="Enter your Wallet Address"
                                                            />
                                                        </div>

                                                        <p className='mt-7 mb-5 text-white text-xs text-center'>Just a limited amount of people will be picked and added to the whitelist.</p>
                                                        <p className='mb-2 text-white  text-xs text-center'>You will be notified via e-mail.</p>

                                                        {/* Close button */}
                                                        <div className='text-center'>
                                                            <button type="submit" onClick={ onSubmit} className="mt-4 rounded-lg  font-bold capitalize bg-[#F9C306]  px-[20px] py-[11px]">
                                                                SUBMIT
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                                </form>
                                            </div>
                                            </div> )}
                                    </div>

                            <div className='flex justify-start items-center '>
                                <p className='text-[8px] w-[50px] text-white mr-3'>Supported&nbsp;by</p>
                                <img className='w-4/5' src={require('../assets/Bd 1.png')} alt="" />
                            </div>
                        </div>
                    </div>


                    <div >
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
