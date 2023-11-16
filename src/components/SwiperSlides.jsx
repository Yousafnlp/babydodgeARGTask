import React, { useState  } from 'react';

import { Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; 

function SwiperSlides() {
  const [activeIndex, setActiveIndex] = useState(1);

  
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    if (swiper.activeIndex === 7) {
      swiper.slideTo(1)
    }
  };

  return (
    <>
      <div className="bg-black pt-[70px]">
        <div className="container-myc pb-[70px] m-auto ">
          <Swiper
          // navigation={true}
          
            centeredSlides={true}
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
            }}   breakpoints={{
              768: {
                slidesPerView: 1,
              },
              770: {
                slidesPerView: 3,
              },
            }}
            initialSlide={1}
            spaceBetween={0}
            speed={500}
            modules={[Autoplay]}
            className="mySwiper swiper-cover m-auto bg-black"
            onSlideChange={handleSlideChange}
            style={{ paddingBottom: '20px !important' }}
          >
         
         
         
         
            {/* Swiper slides */}
            <SwiperSlide className='slideslg'>
              <div className="slideChildlg m-auto p-0">
                <div className='flex justify-center items-center flex-col'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 0 ? 'w-full' : 'w-[70%]'}`} src={require('../assets/sww.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
                   
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>

                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideslg'>
              <div className="slideChildlg">
                <div className='flex-col flex px-1 w-full gap-5 justify-center items-center'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 1 ? 'w-full' : 'w-[67%]'}`} src={require('../assets/katana-08 1 - character 1.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
 
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>
     </div>           
          </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideslg'>
              <div className="slideChildlg">
                <div className='flex-col flex px-1 w-full gap-5 justify-center items-center'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 2 ? 'w-[70%]' : 'w-[45%]'}`} src={require('../assets/Group 40731.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
 
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>
     </div>           
          </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='slideslg'>
              <div className="slideChildlg m-auto p-0">
                <div className='flex justify-center items-center flex-col'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 3 ? 'w-full' : 'w-[70%]'}`} src={require('../assets/sww.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
                   
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>

                  </div>
                </div>
              </div>
            </SwiperSlide>




            <SwiperSlide className='slideslg'>
              <div className="slideChildlg">
                <div className='flex-col flex px-1 w-full gap-5 justify-center items-center'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 4 ? 'w-full' : 'w-[67%]'}`} src={require('../assets/katana-08 1 - character 1.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
 
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>
     </div>           
          </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className='slideslg'>
              <div className="slideChildlg">
                <div className='flex-col flex px-1 w-full gap-5 justify-center items-center'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 5 ? 'w-[70%]' : 'w-[45%]'}`} src={require('../assets/Group 40731.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
 
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>
     </div>           
          </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className='slideslg'>
              <div className="slideChildlg m-auto p-0">
                <div className='flex justify-center items-center flex-col'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 6 ? 'w-full' : 'w-[70%]'}`} src={require('../assets/sww.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
                   
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>

                  </div>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className='slideslg'>
              <div className="slideChildlg">
                <div className='flex-col flex px-1 w-full gap-5 justify-center items-center'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 7 ? 'w-full' : 'w-[67%]'}`} src={require('../assets/katana-08 1 - character 1.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
 
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>
     </div>           
          </div>
              </div>
            </SwiperSlide>



            <SwiperSlide className='slideslg'>
              <div className="slideChildlg">
                <div className='flex-col flex px-1 w-full gap-5 justify-center items-center'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 8 ? 'w-[70%]' : 'w-[45%]'}`} src={require('../assets/Group 40731.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
 
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>
     </div>           
          </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className='slideslg'>
              <div className="slideChildlg m-auto p-0">
                <div className='flex justify-center items-center flex-col'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 9 ? 'w-full' : 'w-[70%]'}`} src={require('../assets/sww.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
                   
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>

                  </div>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className='slideslg'>
              <div className="slideChildlg">
                <div className='flex-col flex px-1 w-full gap-5 justify-center items-center'>
                  <div className='charbg animated-image'>
                    <img className={`m-3 ${activeIndex === 10 ? 'w-full' : 'w-[67%]'}`} src={require('../assets/katana-08 1 - character 1.png')} alt="" />
                  </div>
                  <div className='bordermy-2 p-3 w-[200px] text-center'>
 
       <h2 className='text-white mb-4 text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>BNB CHAIN</h2>

       <p className='text-slate-500 	text-sm md:text-sm lg:text-sm text-sm md:text-sm lg:text-sm	'>PARITY</p>
       <h4 className='text-white mb-4 text-sm md:text-base lg:text-base'>IMMORAL</h4>

       <p className='text-slate-500 text-sm md:text-sm lg:text-sm	'>QUANITY</p>
       <h4 className='text-white text-sm md:text-base lg:text-base'>TBA</h4>
     </div>           
          </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SwiperSlides;










