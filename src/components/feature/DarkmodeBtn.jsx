import React, { useState } from 'react'

const DarkmodeBtn = () => {
    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform -translate-x-9 !bg-black";
    function setDarkMode() {
        setToggle(!toggle);
        document.documentElement.classList.toggle("dark");
        document.body.classList.toggle("bg-gray-700");
    }
    return (
        
            <div
                    className=" w-16 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
                    onClick={setDarkMode}
                >
                    <div
                        className={
                            "bg-gray-600 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                            (toggle ? null : toggleClass)
                        }
                    ></div>
                </div>
                
    );
}

export default DarkmodeBtn