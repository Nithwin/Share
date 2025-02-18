import React from 'react'
import Portfolio from '../components/Portfolio'

const Works = () => {
  return (
    <section id='portfolio' className='bg-gray-50 w-full lg:py-[1rem]'>
      <div className='flex flex-col px-[1.5rem] py-[2rem] gap-10 max-w-[70rem] mx-auto items-center lg:py-0 lg:flex-col lg:justify-center'>
        <div className='flex flex-col gap-3'>
          <p className='uppercase tracking-widest text-center text-lightgreen font-semibold'>works</p>
          <p className='font-bold text-center text-2xl'>Portfolio</p>
          <p className='text-center text-lg' >Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
        </div>
        <Portfolio />
        <div>
          <button className='bg-black text-white px-[2rem] py-[0.5rem] rounded text-xl'>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Works
