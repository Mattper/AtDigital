import React, { useState } from 'react'
import { IoMenu,  IoCloseSharp  } from "react-icons/io5";

export const Navbar = () => {
  const [open, setOpen] =useState(false);

  return (
    <header className='h-[77px] w-full flex items-center justify-between text-Text_white font-Inter font-medium text-[14px]/[17px] py-[26px] px-5 md:px-10 bg-Primary'>
        {/* logo */}
        <img src="./White_Logo.png" alt="AtDigitalLogo" className='' />
        <div className='gap-7 hidden md:flex'>
          <span className='uppercase'>Services</span>
          <span className='uppercase'>About us</span>
          <span className='uppercase'>Contact Us</span>
          <span className='uppercase'>Careers</span>
        </div>

        {/* Responsive Menu */}
        <div className='md:hidden'>
          <button onClick={(() => setOpen(!open))}>
            <IoMenu className='w-[31px] h-6 rounded-[5px] text-Text_white relative' />
          </button>
          {/* Navlinks */}
          {open && 
            <div className='absolute z-20 top-0 left-0 w-screen h-screen py-4 px-5 bg-Text_white'>
              <button onClick={(() => setOpen(!open))} className='absolute right-5'>
                <IoCloseSharp className='w-[30px] h-[30px] text-Text relative' />
              </button>
              <div className='font-Inter font-medium text-sm/[17px] gap-8 flex flex-col text-Text transition-all duration-300 ease-out'>
                <span className='uppercase h-7 w-full'>Home</span>
                <span className='uppercase h-7 w-full'>Services</span>
                <span className='uppercase h-7 w-full'>About us</span>
                <span className='uppercase h-7 w-full'>Contact Us</span>
                <span className='uppercase h-7 w-full'>Careers</span>
              </div>
            </div>
          }
        </div>
    </header>
  )
}
