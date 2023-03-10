import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom';
import React from 'react';



const SearchInp = () => {
  const data = useActionData();
  return (
    <div className='relative'>
    <Form method='post' action='/' className='my-3 w-full relative'>
      <input type="text" name='text' placeholder='جستجوی ویدیو های رویدادها شخصیت ها و ...' className='w-full p-3 rounded-lg bg-slate-200 outline-none dark:bg-gray-800 dark:text-white placeholder:text-gray-500 focus:outline focus:outline-blue-600' />
      <button className='absolute top-1/2 -translate-y-1/2 left-3'><MagnifyingGlassIcon className='dark:text-white' width={28}/></button>
      </Form>
      {data && data.error && <small className='text-red-600 font-semibold lg:absolute'>{data.error}</small>}
    </div>
    
  )
}

export const searchAction = async ({ request }) => {
  const data = await request.formData();
  
  const text = data.get("text");

  if (text.length == 0) {
    return { error: "لطفا مقداری را برای جستجو وارد کنید." }
  }
  return redirect(`search/${text}`)
}


export default SearchInp