import React from 'react'
import TeamCards from '../components/TeamCards'

const Team = () => {
  return (
    <div className='bg-gray-50 w-full lg:py-[1rem]' >
      <section className='flex flex-col px-[1.5rem] py-[2rem] gap-5 max-w-[70rem] mx-auto items-center lg:py-0 lg:flex-col lg:justify-center'>
          <div className='flex flex-col gap-2'>
            <p className='text-center uppercase text-lightgreen font-semibold tracking-widest'>team</p>
            <p className='text-center text-2xl font-bold'>Our Talents</p>
            <p className='text-center text-lg' >Lorem ipsum, dolor sit amet consectetur
              adipisicing elit.</p>
          </div>
          <TeamCards />
          <div>
            <button className='mx-auto bg-black rounded text-white px-[2rem] py-[0.5rem] text-xl'>Learn More</button>
          </div>
      </section>
    </div>
  )
}

export default Team
