import React from 'react'

const Home = () => {
  return (
    <section className='bg-lightgreen px-[1rem] h-[90vh]' >
      <div className='h-full flex flex-col justify-between pb-[5rem] mx-auto lg:flex-row-reverse lg:items-center lg:max-w-[70rem] lg:px-[1rem] lg:py-[2rem]'>
        <div className='lg:w-1/2' >
          <img src="/assets/hand-drawing.png" className='h-[15rem] w-[25rem] lg:h-[25rem] lg:w-[35rem]' alt="Hand Drawing" />
        </div>
        <div className='space-y-5 lg:w-1/2 lg:max-w-[30rem]'>
          <div className='space-y-3'>
            <p className='text-white uppercase tracking-widest font-semibold lg:text-xl'>welcome</p>
            <p className='text-white text-3xl font-bold font-sans lg:text-[2.9rem]'>Lorem ipsum dolor sit amet consectetur</p>
            <p className='text-white font-light lg:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore delectus placeat voluptatibus suscipit rerum facilis incidunt? Iste.</p>
          </div>
          <button className='bg-white px-[3rem] py-[0.4rem] rounded text-2xl'>Explore</button>
        </div>
      </div>
    </section>
  )
}

export default Home
