import React from 'react'
import { ScaleLoader } from 'react-spinners'


const Loading = () => {
    return (
        <div className='w-full h-[calc(100vh-130px)] lg:h-[calc(100vh-70px)] flex items-center justify-center'>
            <ScaleLoader height={60} width={10} color="#36d7b7" />
       </div>
  )
}

export default Loading