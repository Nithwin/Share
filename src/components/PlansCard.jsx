import React from 'react'
import { TiTick } from "react-icons/ti";
import { PlansData } from '../data/data';
const PlansCard = () => {
  return (
    <div className='flex flex-col gap-10 lg:flex-row'>
      {
        PlansData.map((item, index) => (
          <div key={index} className='flex flex-col items-center gap-10 shadow-xl p-[1rem] rounded py-[2rem]'>
            <div className='flex flex-col gap-2'>
              <p className='text-center text-lg'>{item.type}</p>
              <p className='flex justify-center items-center gap-1 text-gray-500'><span className='font-bold text-4xl text-black'>{item.price}</span><span>/month</span></p>
              <p className='text-center text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
            </div>
            <div>
              <ul className='flex flex-col gap-3'>
                <li className='flex items-center gap-2'>
                  <TiTick className='text-lightgreen size-7' />
                  <p className='text-lg'>Lorem ipsum, dolor sit</p>
                </li>
                <li className='flex items-center gap-2'>
                  <TiTick className='text-lightgreen size-7' />
                  <p className='text-lg'>Lorem ipsum, dolor sit</p>
                </li>
                <li className='flex items-center gap-2'>
                  <TiTick className='text-lightgreen size-7' />
                  <p className='text-lg'>Lorem ipsum, dolor sit</p>
                </li>
                <li className='flex items-center gap-2'>
                  <TiTick className='text-lightgreen size-7' />
                  <p className='text-lg'>Lorem ipsum, dolor sit</p>
                </li>
              </ul>
            </div>
            <div>
              <button className='bg-black text-white px-[2rem] py-[0.5rem] text-xl rounded' >Learn More</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PlansCard
