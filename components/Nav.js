import React from 'react'

const Nav = () => {
  return (
    <nav className='w-full px-36 relative'>
      <button
        className='hamburger font-bold text-white text-xl absolute right-0 m-2 sm:hidden'
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <span className='hamburger-patty'></span>
        <span className='hamburger-patty'></span>
        <span className='hamburger-patty'></span>
      </button>
      <ul className='flex flex-col sm:flex-row justify-center sm:justify-evenly py-3 items-center gap-2 sm:gap-4 text-white sm:mr-6 font-bold uppercase text-xs sm:text-lg'>
        <li className='hover-underline-animation relative'>
          <span className='hover-underline-animation-span'>
            <a href='#'>Home</a>
          </span>
        </li>
        <li className='hover-underline-animation relative'>
          <span className='hover-underline-animation-span'>
            <a href='#'>Galeria</a>
          </span>
        </li>
        <li className='hover-underline-animation relative'>
          <span className='hover-underline-animation-span'>
            <a href='#'>Contacto</a>
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
