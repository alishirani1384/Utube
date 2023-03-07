import { PlusIcon } from '@heroicons/react/24/outline';
import React, { forwardRef } from 'react'

const UploadBtn = forwardRef((props, ref) => {
  return (
    <button ref={ref} className='flex gap-1 items-center p-2 dark:text-red-600 dark:border-red-600 text-blue-700 border-blue-700 border rounded-full sm:px-4 hover:opacity-70'>
      <PlusIcon width={20} />
      <span className='text-sm hidden font-semibold sm:block'>بارگذاری ویدیو</span>

    </button>
  )
})

export default UploadBtn;