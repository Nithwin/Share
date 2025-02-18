import React from 'react'

const Learn = () => {
  return (
    <div className='flex flex-col px-[1.5rem] py-[2rem] gap-10 max-w-[70rem] mx-auto lg:flex-row-reverse items-center lg:py-0'>
    <div className='lg:w-1/2'>
      <img src="/assets/Group-2.png" alt="Group" className='size-[20rem] lg:size-[28rem]' />
    </div>
    <div className='flex flex-col gap-7 lg:w-1/2 lg:p-[3rem]'>
      <div className='space-y-3'>
        <p className='font-bold text-2xl lg:text-3xl'>Lorem ipsum dolor sit amet consectetur</p>
        <p className='font-extralight lg:text-lg'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
        </p>
      </div>
      <div>
        <button className='text-white bg-black rounded px-[2rem] py-[0.7rem] lg:text-xl'>Learn More</button>
      </div>
    </div>
  </div>
  )
}

export default Learn
