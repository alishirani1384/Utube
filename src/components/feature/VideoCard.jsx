import React from 'react'

const VideoCard = ({ thumbnail, title }) => {
    console.log(thumbnail);
    return (
      <div>
            <img src={thumbnail} alt="" />   
            <p>{title}</p>     
      </div>
    
  )
}

export default VideoCard