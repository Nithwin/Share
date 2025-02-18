import React, { useState } from 'react'
import Logo from '../asserts/Logo'
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav id='home' className='bg-lightgreen w-full [10vh]'>
      <div className=' px-[1rem] py-[0.5rem] flex justify-between items-center max-w-[70rem] mx-auto'>
        <div className='flex items-center gap-2'>
          <div className=''>
            <Logo className={"size-10"} />
          </div>
          <p className='text-white font-semibold text-2xl'>Start</p>
        </div>
        <div className='lg:hidden' >
          {
            open ?
            <RxCross2 onClick={() => setOpen(!open)} className='size-10 text-white cursor-pointer' /> :
            <FiMenu  onClick={() => setOpen(!open)} className='size-9 text-white cursor-pointer' />
          }
        </div>
        <div className='hidden lg:block'>
          <ul className='w-full flex gap-[5rem] items-center text-white'>
            <li>
              <a href='#home' className='text-[1rem] font-semibold border-b border-transparent hover:border-white transition-all ease-linear delay-75'>Home</a>
            </li>
            <li>
              <a href='#portfolio' className='text-[1rem] font-semibold border-b border-transparent hover:border-white transition-all ease-linear delay-75'>Portfolio</a>
            </li>
            <li>
              <a href='#services' className='text-[1rem] font-semibold border-b border-transparent hover:border-white transition-all ease-linear delay-75'>Services</a>
            </li>
            <li>
              <a href='#contact' className='text-[1rem] font-semibold border-b border-transparent hover:border-white transition-all ease-linear delay-75'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`lg:hidden transition-transform delay-100 ease-linear ${open ? "translate-y-0" : "translate-y-full"} bg-green-50 fixed top-[3.5rem] bottom-0 right-0 left-0`}>
        <ul className='w-full h-full flex flex-col justify-evenly items-center'>
          <li>
            <a onClick={()=> setOpen(!open)} href='#home' className='text-[2rem] font-semibold'>Home</a>
          </li>
          <li>
            <a onClick={()=> setOpen(!open)} href='#portfolio' className='text-[2rem] font-semibold'>Portfolio</a>
          </li>
          <li>
            <a onClick={()=> setOpen(!open)} href='#services' className='text-[2rem] font-semibold'>Services</a>
          </li>
          <li>
            <a onClick={()=> setOpen(!open)} href='#contact' className='text-[2rem] font-semibold'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
