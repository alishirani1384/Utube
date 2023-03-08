import React from 'react'
import SignBtn from '../feature/SignBtn';
import UploadBtn from '../feature/UploadBtn';
import Tippy from '@tippyjs/react';
import MenuBtn from '../feature/MenuBtn';
import Logo from '../feature/Logo';
import SearchInp from '../feature/SearchInp';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='py-2 relative dark:bg-gray-900 flex items-center shadow-xl'>
      <div className='flex-col w-full justify-between items-center mx-3'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <MenuBtn />
            <Link to={"/"}>
              <Logo  />
            </Link>
          </div>
          <div className='flex items-center gap-3'>
            <Tippy className='sm:hidden' content="ورود و ثبت نام">
              <SignBtn />
            </Tippy>
            <Tippy className='sm:hidden' content="بارگذاری ویدیو">
              <UploadBtn />
            </Tippy>
          </div>
        </div>
        <div className='top-1/2 lg:-translate-y-1/2 left-1/2 lg:-translate-x-1/2 lg:absolute lg:w-1/3'>
          <SearchInp />
        </div>
      </div>
    </nav>
  )
}

export default Navbar