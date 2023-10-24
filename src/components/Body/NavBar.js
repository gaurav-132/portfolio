import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div className='px-4'>
            <span className='bg-highlight inline-block rounded-full w-[18px] h-[18px] mr-1'></span>
            <span className='bg-highlight inline-block rounded-full w-[18px] h-[18px] ml-1'></span>
        </div>
        
        <div>
            <button className='bg-highlight text-white text-sm px-6 py-2 rounded-md' disabled={true}>
                Contact Me
            </button>
        </div>
    </div>
  )
}

export default NavBar