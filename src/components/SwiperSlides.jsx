import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import './Comp.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

import { Autoplay } from 'swiper/modules';

function SwiperSlides() {
  return (
 
      <>
    
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper swiper-cover bg-black  bordermy  py-5"
      >


        <SwiperSlide className='slides'>
            
            <div className="slideChild">


            <div className='grid  grid-cols-3 md:grid-cols-3 lg:grid-cols-3 container flex  gap-5 justify-center items-center '>


<div>
        <div className='charbg' >
            <img className="m-3 w-[90%]" src={require('../assets/katana-08 1 - character 1.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-100'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>

        
        </div>

        <div>
        <div className='charbg' >

            
            <img className="m-3 w-[90%]" src={require('../assets/Group 40731.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-100'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>
        </div>

        <div>
        <div className='charbg' >

            <img  className="m-3 w-[90%]" src={require('../assets/sww.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-100'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>
        </div>


      </div>

            </div>
            
            </SwiperSlide>



            <SwiperSlide className='slides'>
            
            <div className="slideChild">


            <div className='grid  grid-cols-3 md:grid-cols-3 lg:grid-cols-3 container flex  gap-5 justify-center items-center '>

            <div>
        <div className='charbg' >

            <img  className="m-3 w-[90%]" src={require('../assets/sww.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-100'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>
        </div>
<div>
        <div className='charbg' >
            <img className="m-3 w-[90%]" src={require('../assets/katana-08 1 - character 1.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-100'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>

        
        </div>

        <div>
        <div className='charbg' >

            
            <img className="m-3 w-[90%]" src={require('../assets/Group 40731.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-100'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>
        </div>

       


      </div>

            </div>
            
            </SwiperSlide>

            
        <SwiperSlide className='slides'>
            
            <div className="slideChild">


            <div className='grid  grid-cols-3 md:grid-cols-3 lg:grid-cols-3 container flex  gap-5 justify-center items-center '>


<div>
        <div className='charbg' >
            <img className="m-3 w-[90%]" src={require('../assets/katana-08 1 - character 1.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-100'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>

        
        </div>



        <div>
        <div className='charbg' >

            <img  className="m-3 w-[90%]" src={require('../assets/sww.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-100'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>
        </div>


        <div>
        <div className='charbg' >

            
            <img className="m-3 w-[90%]" src={require('../assets/Group 40731.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-100'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>
        </div>



      </div>

            </div>
            
            </SwiperSlide>

            
        
       
      </Swiper>

   
        </>

  )
}

export default SwiperSlides

