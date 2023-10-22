import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const RightContainer = () => {
  
  const image = 'https://ez-snippet.vercel.app/images/cover.jpeg';

  return (
    <div>
      <div
        className={`w-full  bg-cover bg-no-repeat bg-[url('https://ez-snippet.vercel.app/images/cover.jpeg')]`}
      >
        <div className='flex justify-center gap-2 md:gap-10 md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md'>
            <div className=''>
                <img className='rounded-full border-4 object-cover' width={120} src='https://avatars.githubusercontent.com/u/109432749?v=4'/>
            </div>
            <div className='flex md:flex-1 justify-between items-center gap-4'>
                <div className='text-3xl text-white'>
                    Gaurav Gusain
                </div>
                <div>
                  <a className='bg-primary cursor-pointer text-textPrimary px-2 py-2 rounded-md'>
                    <FontAwesomeIcon icon={["fab", "instagram"]} size='lg'/>
                    <span className='px-2'>Follow me on Instagram</span>
                  </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
