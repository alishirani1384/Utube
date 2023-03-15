import { ArrowUpTrayIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import React, { useRef, useState } from 'react'

const UploadPage = () => {
    const [video, setVideo] = useState(null);
    const input = useRef();
    function handleChange(e) {
        setVideo(URL.createObjectURL(e.target.files[0]));     
    }
    function handleClick() {
        input.current.click()
    }
    
    

  return (
      <div className='w-full h-[calc(100vh-130px)] lg:h-[calc(100vh-70px)] flex items-center justify-center'>
          <div className='flex flex-col md:bg-slate-200  w-full md:w-3/5 lg:w-2/3 xl:w-2/4 2xl:w-1/3 md:rounded-lg p-4'>
              <input ref={input} type="file" accept='video/*' onChange={handleChange} hidden />
              
              {
                  video
                      ?
                      <>
                      <video src={video} controls />
                      <button onClick={()=>setVideo(null)} className='bg-slate-900 text-white text-lg p-4 rounded-xl w-fit flex items-center justify-between gap-3 mx-auto my-4'><ArrowUturnLeftIcon width={30}/> برگردید</button>
                      </>
                      
                      :
                  <button onClick={handleClick} className='bg-slate-400 text-white w-1/2 aspect-square  mx-auto rounded-md flex flex-col items-center justify-center'>
                  <ArrowUpTrayIcon width={100} color='white' />
                  ویدیو را انتخاب کنید
                  </button>
              }
          </div>
      </div>
  )
}

export default UploadPage