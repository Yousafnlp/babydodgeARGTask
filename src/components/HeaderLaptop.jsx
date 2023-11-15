import React, { useState } from 'react';

import './Comp.css'
import { AiOutlineMail, AiFillCloseCircle } from 'react-icons/ai';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { toast } from 'react-toastify';


function HeaderLaptop() {




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
            <div className='bg-black  '>
                <div className="container-myc m-auto p-0">
                    <div className='mybg'>
                        <div className="grid   bordermy grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2    flex justify-center items-center pt-4 pl-1 pr-1 ">

                            <div>
                                <div className='flex justify-center flex-col p-4'>
                                    <img className='w-5/12' src='https://babydoge.katanainu.com/static/media/Babydoge_x_Katanainu.8b1e2178435316562627.png' alt="" />
                                    <img className='w-5/12' src={require('../assets/Group 40746.png')} alt="" />
                                    <button class="bg-transparent font-bold w-[208px] text-lg text-white border-cstm1 py-2 "
                                        onClick={openPopup}
                                    >
                                        Whitelist Now
                                    </button>


                                    {/* ---------- */}

                                    <div>
                                        {/* <button  className="bg-blue-500 text-white p-2">Open Form</button> */}

                                        {isPopupOpen && (
                                            <div className="  items-center 	w-[50%]   absolute z-10 top-2/4 left-2/4 " style={{ transform: "translate(-50%, -50%)" }}>

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

                                                        <div class="grid grid-cols-2 mt-5 gap-3 ">


                                                            <div className="flex relative items-center">
                                                                <div className='text-white absolute  top-[10px] left-[10px]'>
                                                                    <FaTwitter />
                                                                </div>

                                                                <input
                                                                     type="text"
                                                                     onChange={onChange}
                                                                     className='bg-black px-8 w-full  py-1 rounded-lg text-white border-2  border-[#F9C306]'
                                                                    id="username"
                                                                    name="twitter"
                                                                    placeholder="Enter your Twitter"
                                                                    value={twitter}
                                                                />
                                                            </div>


                                                            <div className="flex relative items-center">
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
                                                        </div>

                                                        <div className='mt-5 '>
                                                            <label className='text-start  text-[hsla(0,0%,100%,.5)]'>Wallet Address</label>

                                                            <input
                                                                 type="text"
                                                                 onChange={onChange}
                                                                className='bg-black px-2 w-full mt-2  py-1 rounded-lg text-white border-2  border-[#F9C306]'
                                                                id="username"
                                                                name="walletAddress"
                                                                placeholder="Enter your Wallet address"
                                                                value={walletAddress}
                                                            />
                                                        </div>

                                                        <p className='mt-7 mb-5 text-white text-xs text-center'>Just a limited amount of people will be picked and added to the whitelist.</p>
                                                        <p className='mb-2 text-white  text-xs text-center'>You will be notified via e-mail.</p>

                                                        {/* Close button */}
                                                        <div className='text-center'>
                                                            <button  type="button" onClick={onSubmit} className="mt-4 rounded-lg  font-bold capitalize bg-[#F9C306]  px-[20px] py-[11px]">
                                                                SUBMIT
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* ---------- */}
                                    <div className='flex items-center btn1-cover  items-center mt-3'>
                                        <button class="bg-transparent font-bold w-[208px] text-lg h-[47px] flex justify-center items-center text-white mr-1 border-cstm1 py-2">
                                            <img src={require('../assets/Bd 1.png')} className='w-[121px] m-1 p-1' alt="" />
                                        </button>|
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
