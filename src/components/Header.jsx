import React, { useState, useEffect } from 'react';
import HeaderLaptop from './HeaderLaptop';
import HeaderMob from './HeaderMob';

function Header() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 1030 // Adjust the breakpoint as needed
  );

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobileOrTablet(window.innerWidth <= 1030); // Adjust the breakpoint as needed
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
          <HeaderMob/>
        ) : (
          // Component to show on laptop or large screens
          <HeaderLaptop/>
        )}
      </div>
    </>
  );
}

export default Header;
