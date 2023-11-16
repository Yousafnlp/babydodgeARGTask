import React from 'react'
import './index.css'
import Header from './components/Header'
import BelowHeader from './components/BelowHeader'
import SectionOne from './components/SectionOne'
import SectionThree from './components/SectionThree'
import Footer from './components/Footer'

import Video from './components/Video'
import './components/Comp.css'
import SwiperSlides from './components/SwiperSlides'



function App() {
  return (
    <div>
      
    <Header/>
    <BelowHeader/>
    <SectionOne/>

 <SwiperSlides/>
<SectionThree/>
    <Video/>
    <Footer/>

    </div>
  )
}

export default App
