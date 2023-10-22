import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFireFlameCurved, faHouse, faCode, faVideo} from '@fortawesome/free-solid-svg-icons';


library.add(fab);


const LeftContainer = () => {

    const sideBarData = [
        { title: 'Home', icon: faHouse },
        { title: 'Trending', icon: faFireFlameCurved },
        { title: 'Snippets', icon: faCode },
        { title: 'Videos', icon: faVideo }
    ];

    const socialData = [
        { title: "Instagram", icon: ["fab", "instagram"], stroke:'rgb(181, 23, 158)' },
        { title: "Github", icon: ["fab", "github"], stroke:'rgb(42, 157, 143)' },
        { title: "Youtube", icon: ["fab", "youtube"], stroke: 'rgb(230, 57, 70)' },
        { title: "Stack Overflow", icon: ["fab", "stack-overflow"], stroke:'rgb(247, 127, 0)' },
        { title: "Linked In", icon: ["fab", "linkedin"], stroke: 'rgb(2, 119, 181)'},
    ];

    return (
        <div className='text-textPrimary'>
            <div className='mt-7'>
                {
                    sideBarData.map((data, index) => {
                        return(
                            <div className='px-10 py-1 mt-5 cursor-pointer'>
                                <a className='flex align-middle mt-3 gap-4'>
                                    <FontAwesomeIcon icon={data.icon} size='lg' className='text-[#ccc]'>
                                    </FontAwesomeIcon>
                                    <span className='inline-block'>{data.title}</span>
                                </a>
                            </div>
                        )
                    })
                }
            </div>

            <div className='mt-4'>
                <h4 className='text-textPrimary font-medium text-start ps-6'>Socials</h4>
            </div>
            
            <div className='mb-7'>
                {socialData.map((item, index) => (
                    <div className='px-10 py-1 mt-5 cursor-pointer' key={index}>
                        <a className='flex align-middle mt-3 gap-4'>
                            <FontAwesomeIcon icon={item.icon} size='lg' style={{color: item.stroke}} className='text-[{data.stroke}]' />
                            <span className='inline-block'>{item.title}</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeftContainer;