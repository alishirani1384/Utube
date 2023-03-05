import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

const useSideBar = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(width<1024?false:true);
  useEffect(() => {
    if (width < 1024) {
      setOpen(false);
    } else {
       setOpen(true); 
    }
      
  }, [width]);
  return { open, setOpen };
};

export default useSideBar;
