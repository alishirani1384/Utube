import React,{useContext} from 'react'
import { Context } from './Layout';
import { categories,services} from '../../data';
import MenuBtn from '../feature/MenuBtn';


const SideBar = () => {
    const { open } = useContext(Context);
   
    return (
        open && (
            <div className='shadow-2xl bg-white lg:bg-[rgb(111, 114, 133)] absolute top-0  w-1/2 h-screen z-10 lg:static lg:w-1/4 xl:w-1/6'>
                <div className='flex flex-col gap-2 p-2'>
                    <div className='lg:hidden'>
                       <MenuBtn/> 
                    </div>
                    <hr className='lg:hidden' />
                    <div className='flex my-3 flex-col gap-5'>
                        <h2 className='text-red-600 font-bold text-lg'>دسته بندی ها</h2>
                        {
                        categories.map(l=> {
                            return (
                                <div className='flex cursor-pointer gap-2 items-center group' key={l.id}>
                                    <l.icon width={25}/>
                                    <p className='group-hover:animate-bounce'>{l.text}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                    <hr />
                    <div className='flex mt-3 flex-col gap-5'>
                        <h2 className='text-red-600 font-bold text-lg'>سرویس ها</h2>
                        {
                        services.map(l=> {
                            return (
                                <div className='flex cursor-pointer gap-2 items-center group' key={l.id}>
                                    <l.icon width={25}/>
                                    <p className='group-hover:animate-bounce'>{l.text}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                    
                </div>
            </div>
      )
  )
}

export default SideBar