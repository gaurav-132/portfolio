import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved, faHouse,  faCode, faVideo} from '@fortawesome/free-solid-svg-icons';

const LeftContainer = () => {

    const sideBar = ["Home","Trending","Snippets", "Videos"];
    const icons = ["faHouse", "faFireFlameCurved", "faCode", "faVideo"];

    const social = ["Instagram", "Github", "Youtube", "Stack Overflow", "Linked In"]

    return (
        <div className='text-textPrimary'>
            <div>
                {
                    sideBar.map((data, index) => {
                        return(
                            <div className='px-10 py-1 mt-5 cursor-pointer'>
                                <a className='flex align-middle mt-3 gap-4'>
                                    <FontAwesomeIcon icon={faCode} className='text-[#ccc]'>
                                    </FontAwesomeIcon>
                                    <span className='inline-block'>{data}</span>
                                </a>
                            </div>
                        )
                    })
                }
            </div>

            <div className='mt-4'>
                <h4 className='text-textPrimary text-start ps-2'>Socials</h4>

            </div>
            
        </div>
    )
}

export default LeftContainer;