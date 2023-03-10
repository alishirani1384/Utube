import React from 'react'

const VideoCard = ({title,thumbnail,name }) => {

    return (
      <div className='flex flex-col rounded-lg gap-1'>
        <img src={thumbnail} alt={title} loading='lazy' className='cursor-pointer'/>
        <div className='dark:text-white p-2'>
          <small className='opacity-100'>{name}</small>
          <p className='cursor-pointer opacity-100'>{title}</p>  
        </div>
               
      </div>
    
  )
}

export default VideoCard