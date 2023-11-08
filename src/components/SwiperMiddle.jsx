

import React, { useState, useEffect } from 'react';
import SwiperSlides from './SwiperSlides';
import SwiperSlideMob from './SwiperSlideMob';

function SwiperMiddle() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 768 // Adjust the breakpoint as needed
  );

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobileOrTablet(window.innerWidth <= 850); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);


  return (

    <>
    <div>
      {isMobileOrTablet ? (
        // Component to show on mobile or tablet
        <SwiperSlideMob/>
      ) : (
        // Component to show on laptop or large screens
        <SwiperSlides/>
      )}
    </div>
  </>

 
  )
}

export default SwiperMiddle
