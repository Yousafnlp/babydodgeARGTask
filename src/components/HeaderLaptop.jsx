import React, { useState } from 'react';

import './Comp.css'
import { AiOutlineMail, AiFillCloseCircle } from 'react-icons/ai';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


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

        <>
            <div className='bg-black  '>
                <div className="container-myc m-auto p-0">
                    <div className='mybg    bordermy flex justify-center items-center'>
                        <div className="       flex justify-center items-center pt-4 pl-1 pr-1 ">

                            <div className='w-[410px]'>
                                <div className='flex justify-center flex-col p-4'>
                                    <img className='w-[290px]' src='https://babydoge.katanainu.com/static/media/Babydoge_x_Katanainu.8b1e2178435316562627.png' alt="" />
                                    <img className='w-[290px]' src={require('../assets/Group 40746.png')} alt="" />
                                    <button class="bg-transparent font-bold w-[208px] text-lg text-white border-cstm1 py-2 "
                                        onClick={openPopup}
                                    >
                                        Whitelist Now
                                    </button>


                                    {/* ---------- */}

                                    <div>
                                        {/* <button  className="bg-blue-500 text-white p-2">Open Form</button> */}
                                        {isPopupOpen && (
                                            <div className="container-myc">
                                            <div className="  items-center 	w-[50%]   absolute z-10 top-[60%] left-2/4 " style={{ transform: "translate(-50%, -50%)" }}>
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

                                    {/* ---------- */}
                                    <div className='flex items-center btn1-cover w-[434px] items-center mt-3'>
                                        <Link to='https://babydogeswap.com/' target='_blank' class="bg-transparent font-bold w-[208px] text-lg h-[47px] flex justify-center items-center text-white mr-1 border-cstm1 py-2">
                                            <img src={require('../assets/Bd 1.png')} className='w-[121px] m-1 p-1' alt="" />
                                        </Link>                                       
                                         <Link  to='https://katanainu.com/' target='_blank' class="bg-transparent font-bold text-lg w-[208px] h-[47px] text-white ml-2 flex justify-center items-center btn2-cover border-cstm1 py-2">
                                            <img src={require('../assets/KatanaInu.ec3265304d4ff036d1e8.png')} className='w-[121px] m-1 p-1' alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-center w-[820px] items-center'>
                                    <img className='w-[800px]' src={require('../assets/babydoge_Viewport_021 1.png')} alt="" />
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
