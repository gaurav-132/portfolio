import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCode, faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';


library.add(fab);


const ProgressiveCard = ({project}) => {
  return (
    <div className='flex flex-col gap-3 rounded-md cursor-pointer'>
        <a>
            <div className='aspect-video relative  rounded-lg overflow-hidden'>
                <img src={project.img} className='h-full top-0 left-0 right-0 bottom-0'/>
                <div className='w-[100%] h-[7px] bg-[#ccc] absolute bottom-0'>
                    <div className={`bg-highlight rounded-r-sm h-full`} style={{ width: `${project.progress}%` }}></div>
                </div>
            </div>
        </a>
        <div className='mx-2'>
            <div className='text-white font-semibold'>{project.title}</div>
            <div className='flex gap-2 md:gap-12 mt-3 items-center'>
                <a className='text-textPrimary text-xs flex items-center gap-1'>
                    <div>
                        <FontAwesomeIcon icon={faCode} size='sm' className='text-textInfo'/>                            
                    </div>
                    <div className='text-textInfo'>
                        {project.codeLines}
                    </div>
                </a>
                <a className='text-textInfo flex  gap-1 text-xs'>
                    <div>
                        <FontAwesomeIcon size='sm' className='text-textInfo' icon={faClockRotateLeft} />                           
                    </div>
                    <div className='text-textInfo'>
                        {project.days}
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProgressiveCard;