import React from 'react'

const VideoCard = ({title,video,date }) => {

    return (
      <div className='flex flex-col rounded-lg p-2 shadow-lg gap-1'>  
        <iframe src={video} frameborder="0"></iframe>
        <div className='dark:text-white'>
          <small>{date}</small>
          <p>{title}</p>  
        </div>
               
      </div>
    
  )
}

export default VideoCard