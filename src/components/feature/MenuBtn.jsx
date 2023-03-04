import React from 'react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';

const MenuBtn = () => {
  return (
      <button className='flex items-center justify-center p-2 rounded-full hover:bg-slate-200'>
          <Bars3BottomRightIcon width={30}/>
      </button>
  )
}

export default MenuBtn