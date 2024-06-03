import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFireFlameCurved, faHouse, faCode, faVideo, faLifeRing} from '@fortawesome/free-solid-svg-icons';


library.add(fab);


const Sidebar = () => {
    const sideBarData = [
        { title: 'Home', icon: faHouse },
        { title: 'Trending', icon: faFireFlameCurved },
        { title: 'Snippets', icon: faCode },
        { title: 'Videos', icon: faVideo }
    ];

    const socialData = [
        { title: "Instagram", icon: ["fab", "instagram"], stroke:'rgb(181, 23, 158)', link:"https://www.instagram.com/heisgrv" },
        { title: "Github", icon: ["fab", "github"], stroke:'rgb(42, 157, 143)', link:"https://github.com/gaurav-132" },
        { title: "LeetCode", icon: faCode, stroke: 'rgb(230, 57, 70)', link:"https://leetcode.com/u/gaurav-132/" },
        { title: "Twitter", icon: ["fab", "x-twitter"], stroke:'rgb(231, 233, 234)', link:"https://x.com/Gau_ravv__" },
        { title: "Linked In", icon: ["fab", "linkedin"], stroke: 'rgb(2, 119, 181)', link:"https://www.linkedin.com/in/gaurav-gusain-038b1b223/"},
    ];

    return (
        <div className='flex relative flex-col h-full  bg-card text-textPrimary rounded-lg w-full overflow-y-auto pb-20 md:pb-5'>
            <div className='mt-2 mx-5'>
                {
                    sideBarData.map((data, index) => {
                        return(
                            <a href='/' className='flex bg-transparent items-center text-md p-4 gap-4 placeholder:text-textInfo transform transition-transform duration-300 hover:-translate-y-1 cursor-pointer'>
                                <FontAwesomeIcon icon={data.icon} size='lg' fill='none'  >
                                </FontAwesomeIcon>
                                {data.title}
                            </a>
                        )
                    })
                }
            </div>

            <div className='mt-4'>
                <h4 className='text-textPrimary font-medium text-start ps-4'>Socials</h4>
            </div>
            
            <div className='mx-5 mb-2'>
                {socialData.map((item, index) => (
                    <a href={item.link} target='_blank' className='flex items-center text-md  p-4 gap-4 placeholder:text-textInfo transform transition-transform duration-300 hover:-translate-y-1 cursor-pointer'>
                        <FontAwesomeIcon icon={item.icon} size='lg' style={{color: item.stroke}} className='text-[{data.stroke}]' />
                        <span className='inline-block text-md font-medium'>{item.title}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;