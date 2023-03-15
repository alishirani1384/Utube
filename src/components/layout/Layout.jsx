import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import SideBar from './SideBar';
import useSideBar from '../../hooks/useSideBar';

export const Context = createContext()

const Layout = () => {
  const { open, setOpen } = useSideBar();

  return (
    <div>
      <Context.Provider value={{ open, setOpen}}>
        <Navbar />
        <div className='flex items-start'>
          <SideBar />
          <Outlet />
        </div>
      </Context.Provider>
    </div>
  )
}

export default Layout