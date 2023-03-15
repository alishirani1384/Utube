import { AtSymbolIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { Form, redirect } from 'react-router-dom'

const SignPage = () => {
  const [type, setType] = useState("password");
  return (
    <div className='w-full h-[calc(100vh-130px)] lg:h-[calc(100vh-70px)] flex md:items-center justify-center'>
      <div className='md:bg-slate-200 shadow-lg  w-full md:w-3/5 lg:w-2/3 xl:w-2/4 2xl:w-1/3 md:rounded-lg p-4'>
        <Form className='w-full flex flex-col gap-8 my-3' action='/login' method='post'>
          <div className='flex items-center gap-4 mx-auto'>
            <button className='rounded bg-slate-700 text-white p-4'>GOOGLE</button>
            <button className='rounded bg-slate-700 text-white p-4'>GITHUB</button>
          </div>
          <hr className='border-black' />
          <div className='flex flex-col gap-4'>
            <div className='relative flex items-center'>
              <input name='email' required type="email" dir='auto' placeholder='ایمیل' className='w-full p-3 rounded-lg outline-none bg-gray-800 text-white placeholder:text-gray-500 focus:outline focus:outline-blue-600' />
              <AtSymbolIcon width={30} color='white' className='absolute right-2' />
            </div>
            <div className='relative flex items-center'>
              <input name='password' required autoComplete='true' type={type} dir='auto' placeholder='رمز' className='w-full p-3 rounded-lg outline-none bg-gray-800 text-white placeholder:text-gray-500 focus:outline focus:outline-blue-600' />
              <button type='button' className='absolute right-2 bg-transparent' onClick={() => setType(type == "password" ? "text" : "password")}>
                {
                  type == "password" ?
                    <EyeSlashIcon width={30} color='white' /> :
                    <EyeIcon width={30} color='white' />
                }
              </button>
            </div>
          </div>
          <button type='submit' className='rounded bg-slate-700 text-white p-4'>وارد شوید</button>
        </Form>
      </div>
    </div>
  )
}


export async function loginAction({ request }) {
  const data = await request.formData();
  const password = data.get("password");
  const email = data.get("email");
  localStorage.setItem("user", `${email} - ${password}`);

  return redirect("/")
}

export default SignPage