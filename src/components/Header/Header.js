import React from 'react'


const Header = () => {
  return (
    <div className='bg-primary flex justify-between py-4 px-6'>
        <div>
            <span className='bg-highlight inline-block rounded-full w-4 h-4 mr-1'></span>
            <span className='bg-highlight inline-block rounded-full w-4 h-4 mr-1'></span>
        </div>
        <div>
            <button className='bg-highlight text-white text-sm px-4 py-1 rounded-md' disabled={true}>
                Contact Me
            </button>
        </div>
    </div>
  )
}

export default Header;
