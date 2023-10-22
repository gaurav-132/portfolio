import React from 'react'
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

const MainContainer = () => {
  return (
    <div className='flex justify-between px-4'>
        <div className='bg-card h-[88vh] w-[20%] rounded-md scrollbar-custom  overflow-y-scroll'>
            <LeftContainer/>
        </div>
        <div className='bg-primary w-[78%]'>
            <RightContainer/>
        </div>
    </div>
  )
}

export default MainContainer;