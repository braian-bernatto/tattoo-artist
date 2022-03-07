import React from 'react'
import Nav from './Nav'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='absolute w-full flex items-center px-5 header'>
      <div className='relative h-16 w-16'>
        <div className='absolute top-0 left-0 bg-white p-1 pb-0 rounded-md'>
          <Image
            src={'/img/logo.jpeg'}
            width={100}
            height={100}
            layout='fixed'
            className='rounded-xl'
          />
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default Header
