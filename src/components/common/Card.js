import React from 'react'

const Card = ({img, title, desc, href}) => {
  return (
    <a href={href} target='_blank' className='flex flex-col text-ellipsis overflow-hidden bg-white gap-3 rounded-md cursor-pointer'>
        <img className='object-cover aspect-video max-w-[100%]' src={img}/>
        <div className='flex flex-col px-4 py-2 h-24'>
            <div className='flex font-bold font-sans text-sm'>{title}</div>
            <div className='text-primary text-xs'>{desc}</div>
        </div>
    </a>
  )
}

export default Card;