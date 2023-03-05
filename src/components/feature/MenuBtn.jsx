import React,{useContext} from 'react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import { Context } from '../layout/Layout';


const MenuBtn = () => {
  const { open,setOpen } = useContext(Context);
  return (
      <button onClick={()=>setOpen(!open)} className='flex items-center justify-center p-2 rounded-full hover:bg-slate-200'>
          <Bars3BottomRightIcon width={30}/>
      </button>
  )
}

export default MenuBtn