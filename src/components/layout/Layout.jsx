import React,{createContext} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import SideBar from './SideBar';
import useSideBar from '../../hooks/useSideBar';

export const Context=createContext()

const Layout = () => {
  const {open,setOpen}=useSideBar()
  
  return (
    <div>
      <Context.Provider value={{open,setOpen}}>
        <Navbar />
      <SideBar />
      </Context.Provider>
      <Outlet />
      <h1>footer</h1>
    </div>
  )
}

export default Layout