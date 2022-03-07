import React from 'react'

const Hero = () => {
  return (
    <div className='hero flex justify-center items-center h-full w-full hero-title text-9xl text-white'>
      <span className='flex flex-col justify-center items-center opacity-70'>
        <h1 className='hero-title-main'>Peter Pintos</h1>
        <div className='word-carousel'>
          <ul className='flip2'>
            <li className='hero-title-sub'>Artist</li>
            <li className='hero-title-sub'>Tattoo</li>
          </ul>
        </div>
      </span>
    </div>
  )
}

export default Hero
