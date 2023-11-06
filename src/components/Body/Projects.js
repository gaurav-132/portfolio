import React from 'react'
import Card from '../common/Card'

const Projects = ({projects, heading}) => {
  return (
    <div className='mt-t px-10 text-xl'>
        <div className='my-6'>
            <h4 className='text-white'>{heading}</h4>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
                projects.map((item) => {
                    return(
                        <Card title={item.title} desc={item.desc} img={item.img} href={item.href}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projects