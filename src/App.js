import React from 'react'
import './index.css'
import Header from './components/Header'
import BelowHeader from './components/BelowHeader'
import SectionOne from './components/SectionOne'
import SectionThree from './components/SectionThree'
import SwiperSlides from './components/SwiperSlides'
import Footer from './components/Footer'
import SwiperMiddle from './components/SwiperMiddle'



function App() {
  return (
    <div>
         {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <Header/>
    <BelowHeader/>
    <SectionOne/>
    
    {/* <SwiperSlides/> */}
 
 <SwiperMiddle/>
    <SectionThree/>
    {/* <SectionFour/> */}
    <Footer/>

    </div>
  )
}

export default App
