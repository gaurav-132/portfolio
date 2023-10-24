import React from 'react'


const Header = () => {
  return (
    <nav className='flex justify-end sticky top-0 z-20 right-0 bg-primary py-5 px-6'>
        <button className='bg-highlight text-white text-sm px-6 py-1 rounded-md' disabled={true}>
                Contact Me
        </button>
    </nav>
  )
}

export default Header;
