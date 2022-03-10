import React from 'react'
import Nav from './Nav'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='absolute w-full flex px-5 header'>
      <div className='relative h-12 w-12 sm:h-16 sm:w-16'>
        <div className='h-16 w-16 sm:h-28 sm:w-28 absolute top-0 left-0 bg-white p-1 pb-0 rounded-md'>
          <Image
            src={'/img/logo.jpeg'}
            width={100}
            height={100}
            layout='responsive'
            className='rounded'
          />
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default Header
