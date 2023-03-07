import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Logo = () => {
  return (
      <div className='flex items-center gap-1 cursor-pointer'>
          <PlayCircleIcon width={50} color='red'/>
          <h1 className='font-bold italic text-xl dark:text-white hidden sm:block'>یوتوب</h1>
    </div>
  )
}

export default Logo