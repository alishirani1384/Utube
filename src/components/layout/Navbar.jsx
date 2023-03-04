import React from 'react'
import SignBtn from '../feature/SignBtn';
import UploadBtn from '../feature/UploadBtn';
import Tippy from '@tippyjs/react';
import MenuBtn from '../feature/MenuBtn';


const Navbar = () => {
  return (
    <nav className='h-20 flex items-center shadow-xl'>
      <div className='flex w-full justify-between items-center mx-3'>
        <MenuBtn />
        <div className='flex items-center gap-3'>
          <Tippy className='sm:hidden' content="ورود و ثبت نام">
            <SignBtn />
          </Tippy>
          <Tippy className='sm:hidden' content="بارگذاری ویدیو">
            <UploadBtn />
          </Tippy>
        </div> 
        
      </div>
    </nav>
  )
}

export default Navbar