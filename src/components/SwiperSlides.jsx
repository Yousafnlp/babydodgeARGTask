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
<div className="bg-black">


<div className="container m-auto p-0">


      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper swiper-cover p-0  m-auto bg-black "
      >

      

        <SwiperSlide className='slides'>
            
            <div className="slideChild  m-auto p-0">


            <div className=' flex pt-8 pb-5 px-1 w-full  gap-5 justify-center items-center '>


<div className='w-[20%]'>
        <div className='charbg animated-image' >
            <img className="m-3 w-[90%]" src={require('../assets/katana-08 1 - character 1.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-full'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>

        
        </div>

        <div className='w-[50%]'>
        <div className='charbg animated-image' >

            
            <img className="m-3 w-[60%]" src={require('../assets/Group 40731.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-full'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>
        </div>

        <div className='w-[20%]'>
        <div className='charbg animated-image' >

            <img  className="m-3 w-[90%]" src={require('../assets/sww.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-full'>
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
            
            <div className="slideChild  m-auto p-0">


            <div className=' flex   pt-8 pb-5 px-1 w-full gap-5 justify-center items-center '>



            <div className='w-[20%]'>
        <div className='charbg animated-image' >

            
            <img className="m-3 w-[90%]" src={require('../assets/Group 40731.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-full'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>
        </div>

<div className='w-[50%]'>
        <div className='charbg animated-image' >
            <img className="m-3 w-[90%]" src={require('../assets/katana-08 1 - character 1.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-full'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>

        
        </div>


        <div className='w-[20%]'>
        <div className='charbg animated-image' >

            <img  className="m-3 w-[90%]" src={require('../assets/sww.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-full'>
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
            
            <div className="slideChild  m-auto p-0">


            <div className=' flex  pt-8 pb-5 px-1  w-full gap-5 justify-center items-center '>


<div className='w-[20%]'>
        <div className='charbg animated-image' >
            <img className="m-3 w-[90%]" src={require('../assets/katana-08 1 - character 1.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-full'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>

        
        </div>

 

        <div className='w-[50%]'>
        <div className='charbg animated-image' >

            <img  className="m-3 w-[90%]" src={require('../assets/sww.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-full'>
          <h2 className='text-white mb-4 text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>BNB CHAIN</h2>

          <p className='text-slate-500 	text-sm md:text-base lg:text-base text-sm md:text-base lg:text-base	'>PARITY</p>
          <h4 className='text-white mb-4 text-base md:text-xl lg:text-xl'>IMMORAL</h4>

          <p className='text-slate-500 text-sm md:text-base lg:text-base	'>QUANITY</p>
          <h4 className='text-white text-base md:text-xl lg:text-xl'>TBA</h4>
        </div>
        </div>



        <div className='w-[20%]'>
        <div className='charbg animated-image' >

            
            <img className="m-3 w-[90%]" src={require('../assets/Group 40731.png')} alt="" />
        </div>
        <div className=' bordermy-2 p-3 w-full'>
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

</div>
</div>
   
        </>

  )
}

export default SwiperSlides

