import React from 'react'
import { FaAnglesUp } from "react-icons/fa6";
const GoTop = () => {
  return (
    <a href='#home' className=''>
      <FaAnglesUp className='text-white size-10 fixed z-50 bottom-5 right-5 bg-black rounded-full p-2 cursor-pointer' />
    </a>
  )
}

export default GoTop
