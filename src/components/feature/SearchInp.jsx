import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const SearchInp = () => {
  return (
    <form className='my-3 w-full relative'>
      <input type="text" placeholder='جستجوی ویدیو های رویدادها شخصیت ها و ...' className='w-full p-3 rounded-lg bg-slate-200 outline-none placeholder:text-gray-500 focus:outline focus:outline-blue-600' />
      <button className='absolute top-1/2 -translate-y-1/2 left-3'><MagnifyingGlassIcon width={28}/></button>
    </form>
  )
}

export default SearchInp