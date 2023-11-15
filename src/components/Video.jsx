import React from 'react'

function Video() {
  return (
    <div className="bg-black flex justify-center align-center">
    <div className='container-myc'>
    <video autoplay="" loop muted className=" w-full">
  <source src={require('../assets/sword.mp4')} type="video/mp4" />

</video>


    </div>
    </div>
  )
}

export default Video
