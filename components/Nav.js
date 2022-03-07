import React from 'react'

const Nav = () => {
  return (
    <nav className='w-full px-36'>
      <ul className='flex justify-evenly items-center gap-4 text-white mr-6 font-bold text-lg uppercase'>
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
