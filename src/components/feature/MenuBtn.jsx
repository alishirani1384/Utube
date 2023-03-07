import React,{useContext} from 'react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import { Context } from '../layout/Layout';


const MenuBtn = () => {
  const { open,setOpen } = useContext(Context);
  return (
      <button onClick={()=>setOpen(!open)} className='flex items-center justify-center p-2 rounded-full dark:hover:bg-slate-800 hover:bg-slate-200'>
      <Bars3BottomRightIcon className='dark:text-white' width={30}/>
      </button>
  )
}

export default MenuBtn