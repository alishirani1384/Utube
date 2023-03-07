import React,{createContext} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import SideBar from './SideBar';
import useSideBar from '../../hooks/useSideBar';

export const Context=createContext()

const Layout = () => {
  const {open,setOpen}=useSideBar()
  
  return (
    <div className=''>
      <Context.Provider value={{open,setOpen}}>
        <Navbar />
      <SideBar />
      </Context.Provider>
      <Outlet />
    </div>
  )
}

export default Layout