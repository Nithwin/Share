import React from 'react'
import PlansCard from '../components/PlansCard'

const Plans = () => {
  return (
    <section className='bg-gray-100 w-full lg:py-[2rem]'>
      <div className='flex flex-col px-[1.5rem] py-[2rem] gap-10 max-w-[70rem] mx-auto items-center lg:py-0 lg:flex-col lg:justify-center'>
        <div className='flex flex-col gap-3'>
          <p className='uppercase tracking-widest text-center text-lightgreen font-semibold'>plans</p>
          <p className='font-bold text-center text-2xl'>Our Services</p>
          <p className='text-center text-lg'>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
        </div>
        <PlansCard />
      </div>
    </section>
  )
}

export default Plans
