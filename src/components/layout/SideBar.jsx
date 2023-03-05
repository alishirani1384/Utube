import React,{useContext} from 'react'
import { Context } from './Layout'


const SideBar = () => {
    const { open } = useContext(Context);
   
    return (
      open && <div>sidebar</div>
  )
}

export default SideBar