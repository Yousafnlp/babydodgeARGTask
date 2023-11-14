import React, { useState } from 'react';

import './Comp.css'
import { AiOutlineMail, AiFillCloseCircle } from 'react-icons/ai';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { toast } from 'react-toastify';


function HeaderMob() {

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
            //   console.log("form data", formData);

            // if (!email || twitter || discord || walletAddress) {
            //     toast.error("fill the complete form first")
            //     return false;
            // }



            let result = await fetch('https://launcherapi.katanainu.com/api/v1/whitelist/create', {
                method: "post",
                body: JSON.stringify({ email, twitter, walletAddress, discord }),
                headers: {  
                    
                    
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    
                }
            })

            console.log("final result__________", result)

            if (result.ok) {
                result = await result.json();
                toast.success("Subscribed successfully")
            }

            setFormData({
                email: "",
                twitter: "",
                discord: "",
                walletAddress: "",

            })


            console.log("final result__________", result)
        }

        catch (error) {
            toast.error("error while submiting try again")
        }
    }

    const { email, twitter, walletAddress, discord } = formData;


  return (


       
    <>
    <div className='bg-black flex justify-center items-center '>        
            <div className="container m-auto p-0">
        <div className='mybg '>
            <div className="grid bordermy grid-cols-1   flex justify-center items-center lg:flex-row-reverse	pt-4 pl-1 pr-1  ">
    
    <div className="">               
                <div>
                    <div className='flex flex-col justify-center items-center'>
                    <img className='w-7/12' src='https://babydoge.katanainu.com/static/media/Babydoge_x_Katanainu.8b1e2178435316562627.png' alt="" />
                        <img className='w-7/12' src={require('../assets/Group 40746.png')} alt="" />
                       
                    </div>
                </div>
    
                <div>
                    <div className='flex justify-center items-center flex-col pt-0 p-4'>
                    <img className='w-full' src={require('../assets/babydoge_Viewport_021 1.png')} alt="" />
                    
                     <button
                     onClick={openPopup}
                     class="bg-transparent font-bold w-full sm:w-[416px] md:w-[416px] lg:w-[416px] text-lg  text-white border-cstm1 py-2 ">
                            Whitelist Now
                        </button>


                        
                                    {/* ---------- */}

                                    <div>
                                        {/* <button  className="bg-blue-500 text-white p-2">Open Form</button> */}

                                        {isPopupOpen && (
                                            <div className="  items-center 	w-[90%]   absolute z-10 top-2/4 left-2/4 " style={{ transform: "translate(-50%, -50%)" }}>
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
                                                                className='bg-black px-8 w-full  py-1 rounded-lg text-white border-2  border-[#F9C306]'
                                                                id="username"
                                                                name="email"
                                                                value={email}
                                                                placeholder="Enter your Email"
                                                            />
                                                        </div>      {/* Add other form fields as needed */}

                                                 


                                                            <div className="flex relative mt-5 items-center">
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
                                        )}
                                    </div>

                                    {/* ---------- */}
                        
                        <div className='flex  justify-center  items-center w-full mt-2 '>
                            <button class="bg-transparent font-bold w-6/12 sm:w-[208px] lg:w-[208px] md:w-[208px] text-lg h-[47px]  flex justify-center items-center text-white mr-1 border-cstm1 p-2">
                                <img src={require('../assets/Bd 1.png')} className='w-[121px] m-2  p-1' alt="" />
                            </button>
                            <button class="bg-transparent font-bold text-lg w-6/12 lg:w-[208px] md:w-[208px] sm:w-[208px]  h-[47px] text-white   flex justify-center items-center  btn2-cover border-cstm1 p-2">
                                <img src={require('../assets/KatanaInu.ec3265304d4ff036d1e8.png')} className='w-[121px] m-1 p-1' alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                </div>

            </div>
        </div>
        </div>
    </>
  )
}

export default HeaderMob
