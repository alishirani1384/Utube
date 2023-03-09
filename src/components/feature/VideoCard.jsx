import React from 'react'

const VideoCard = ({title,thumbnail,name }) => {

    return (
      <div className='flex flex-col rounded-lg p-2 shadow-lg gap-1'>  
        <img src={thumbnail} alt={title} loading='lazy'  className='cursor-pointer'/>
        <div className='dark:text-white'>
          <small>{name}</small>
          <p>{title}</p>  
        </div>
               
      </div>
    
  )
}

export default VideoCard